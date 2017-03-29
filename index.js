import EventEmitter from '@axetroy/event-emitter.js';

class Socket extends EventEmitter {
  constructor(config = {}) {
    super();
    // init
    this.connected = false;
    this.req = {};      // 存放发出去的请求
    this.transform = data => data;
    this.queue = [];
    this.retryInterval = 0;

    this.reqInterceptor = (method, url, body, headers) => {
      return {method, url, body, headers};
    };
    this.resInterceptor = (method, url, body, headers, response) => {
      return {method, url, body, headers, response};
    };

    this.url = config.url;

    this.connect(config.url);
  }

  static create() {
    return new Socket(arguments);
  }

  connect(url) {
    this.ws = null;
    delete this.ws;
    console.count('reconnect...');
    const ws = new WebSocket(url);
    ws.addEventListener('open', (event) => {
      this.connected = true;

      // send all message in the queue
      while (this.queue.length) {
        this.send(this.queue.shift());
      }

      this.emit('connected', event.data);
    });

    ws.addEventListener('close', (event) => {
      this.connected = false;
      this.retryInterval > 60 ? this.retryInterval = 2 : void 0;
      setTimeout(() => this.connect(url), ++this.retryInterval * 1000);
      this.emit('closed', event.data);
    });

    ws.addEventListener('message', (event) => {
      this.emit('message', this.transform(event.data));
    });

    this.ws = ws;
  }

  resolve(id, data) {
    const req = this.req[id];
    if (req) {
      let config = req.config;
      if (this.resInterceptor(config.method, config.url, config.body, config.header, data)) {
        req.resolve(data);
      } else {
        req.reject({message: 'Can not pass response interceptor', data});
      }
      this.req[id] = null;
      delete this.req[id];
    }
  }

  send(msg) {
    if (this.connected) {
      this.ws.send(msg);
    }
    else {
      this.queue.push(msg);
    }
    return this;
  }

  request(method, url, body = '', headers = {}) {
    const id = parseInt(Math.random() * 100000, 10);
    const self = this;
    const entity = {
      method,
      url,
      body,
      header: Object.assign({
        "S-Request-Id": id + ''
      }, headers)
    };

    const newEntity = this.reqInterceptor(entity.method, entity.url, entity.body, entity.header);

    if (!newEntity) return Promise.reject({message: 'Can not pass request interceptor', entity});

    this.send(JSON.stringify(newEntity));
    return new Promise(function (resolve, reject) {
      self.req[id] = {
        resolve,
        reject,
        promise: this,
        config: newEntity
      }
    });
  }

  get(url, body, headers = {}) {
    return this.request('GET', url, body, headers);
  }

  post(url, body, headers = {}) {
    return this.request('POST', url, body, headers);
  }

  put(url, body, headers = {}) {
    return this.request('PUT', url, body, headers);
  }

  ["delete"](url, body, headers = {}) {
    return this.request('DELETE', url, body, headers);
  }
}