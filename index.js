/**
 * Created by axetroy on 2017/3/18.
 */
const EventEmitter = require('@axetroy/event-emitter.js');

export default class Socket extends EventEmitter {
  constructor(config = {}) {
    super();
    // init
    this.connected = false;
    this.promise = {};
    this.transform = function (data) {
      return data;
    };

    this.url = config.url;

    const ws = this.ws = new WebSocket(config.url);

    ws.addEventListener('open', (event) => {
      this.connected = true;
      this.emit('open', event.data);
    });

    ws.addEventListener('close', (event) => {
      this.connected = false;
    });

    ws.addEventListener('message', (event) => {
      const response = this.transform(event.data);
      this.emit('message', response);
    });

  }

  resolve(id, data) {
    const promise = this.promise[id];
    if (promise) {
      promise.resolve(data);
      this.promise[id] = null;
      delete this.promise[id];
    }
  }

  send(msg) {
    this.ws.send(msg);
    return this;
  }

  request(method, url, body = '', headers = {}) {
    const id = Math.random();
    const self = this;
    const entity = {
      method,
      url,
      body,
      headers: Object.assign({id}, headers)
    };
    this.send(JSON.stringify(entity));
    return new Promise(function (resolve, reject) {
      self.promise[id] = {
        resolve,
        reject,
        promise: this
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

