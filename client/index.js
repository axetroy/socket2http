import EventEmitter from '@axetroy/event-emitter.js';

export default class Socket extends EventEmitter {
  constructor(config = {}) {
    super();
    // init
    this.REQUEST_IDENTIFIER = 'Request-Id';
    this.connected = false;
    this.req = {}; // 存放发出去的请求
    this.transform = data => data;
    this.queue = [];
    this.retryInterval = 0;

    this.reqInterceptor = (method, url, body, headers) => {};
    this.resInterceptor = (method, url, body, headers, response) => {};

    this.url = config.url;

    this.connect(config.url);
  }

  /**
   * 创建一个新的实例对象
   * @returns {Socket}
   */
  static create() {
    return new Socket(arguments);
  }

  /**
   * 连接到socket服务器
   * @param url
   */
  connect(url) {
    this.ws = null;
    delete this.ws;
    console.count('reconnect...');
    const ws = new WebSocket(url);
    ws.addEventListener('open', event => {
      this.connected = true;

      // 发送消息队列里的消息
      while (this.queue.length) {
        this.__send(this.queue.shift());
      }

      this.emit('open', event.data);
    });

    // 断线自动重连
    ws.addEventListener('close', event => {
      this.connected = false;
      this.retryInterval > 60 ? (this.retryInterval = 2) : void 0;
      setTimeout(() => this.connect(url), ++this.retryInterval * 1000);
      this.emit('closed', event.data);
    });

    // 接收到服务端的推送，则出发message时间
    ws.addEventListener('message', event => {
      let data = {};
      try {
        data = { ...data, ...this.transform(event.data) };
      } catch (err) {
        console.error(err);
      }
      let { header } = data || {};
      this.__resolve(header['Request-Id'], data);
      this.emit('message', data);
    });

    this.ws = ws;
  }

  /**
   * 清空消息队列
   * @returns {Socket}
   */
  cleanQueue() {
    this.queue = [];
    return this;
  }

  /**
   * 设置header中，请求的标识符，请求id的key名
   * @param str
   */
  setIdentifier(str) {
    this.REQUEST_IDENTIFIER = str;
  }

  /**
   * 请求发出后要resolve
   * @param id
   * @param data    服务器返回的经过转换器的内容
   * @returns {Socket}
   */
  __resolve(id, data) {
    const request = this.req[id];
    if (request) {
      const { deferred } = request;
      const { resolve, reject } = deferred;
      let { method, url, body, header } = data;

      // response的拦截器
      try {
        this.resInterceptor(method, url, body, header);
        resolve(data);
      } catch (err) {
        reject(err);
      }

      this.req[id] = null;
      delete this.req[id];
    }
    return this;
  }

  /**
   * 发送消息
   * @param msg
   * @returns {Socket}
   */
  __send(msg) {
    if (this.connected) {
      this.ws.send(msg);
    } else {
      this.queue.push(msg);
    }
    return this;
  }

  /**
   * 发送请求
   * @param method
   * @param url
   * @param body
   * @param header
   * @returns {promise}
   */
  request(method, url, body = '', header = {}) {
    const id = parseInt(Math.random() * 100000, 10);
    const self = this;
    header = {
      [self.REQUEST_IDENTIFIER]: id + '',
      ...header
    };
    let message = {
      method,
      url,
      body,
      header
    };

    // request的拦截器
    try {
      const newMessage = this.reqInterceptor(method, url, body, header);
      message = { ...message, ...newMessage };
    } catch (err) {
      return Promise.reject(err);
    }

    let raw = '';

    try {
      raw = JSON.stringify(message);
    } catch (err) {
      return Promise.reject(err);
    }

    this.__send(raw);

    return new Promise(function(resolve, reject) {
      self.req[id] = {
        deferred: {
          resolve,
          reject,
          promise: this
        }
      };
    });
  }

  /**
   * 模拟GET方法
   * @param url
   * @param body
   * @param headers
   * @returns {*}
   */
  get(url, body, headers = {}) {
    return this.request('GET', url, body, headers);
  }

  /**
   * 模拟POST方法
   * @param url
   * @param body
   * @param headers
   * @returns {*}
   */
  post(url, body, headers = {}) {
    return this.request('POST', url, body, headers);
  }

  /**
   * 模拟PUT方法
   * @param url
   * @param body
   * @param headers
   * @returns {*}
   */
  put(url, body, headers = {}) {
    return this.request('PUT', url, body, headers);
  }

  /**
   * 模拟DELETE方法
   * @param url
   * @param body
   * @param headers
   * @returns {*}
   */
  ['delete'](url, body, headers = {}) {
    return this.request('DELETE', url, body, headers);
  }
}
