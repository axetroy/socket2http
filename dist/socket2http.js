(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Socket2http"] = factory();
	else
		root["Socket2http"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EventEmitter"] = factory();
	else
		root["EventEmitter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Created by axetroy on 2017/3/6.
 */
var name = '@axetroy/event-emitter.js';
var id_Identifier = '__id__';

function randomId() {
  return Math.random().toString(36).substr(2, 16);
}

function findIndexById(id) {
  return this.findIndex(function (callback) {
    return callback[id_Identifier] === id;
  });
}

var defineProperty = Object.defineProperty;

function EventEmitter() {
  this[name] = {};
  defineProperty && defineProperty(this, name, { enumerable: false, configurable: false });
}

var prototype = EventEmitter.prototype;

prototype.constructor = EventEmitter;

prototype.on = function (event, listener) {
  var events = this[name],
      container = events[event] = events[event] || [],
      id = randomId(),
      index = void 0;
  listener[id_Identifier] = id;
  container.push(listener);
  return function () {
    index = findIndexById.call(container, id);
    index >= 0 && container.splice(index, 1);
  };
};

prototype.off = function (event) {
  this[name][event] = [];
};

prototype.clear = function () {
  this[name] = {};
};

prototype.once = function (event, listener) {
  var self = this,
      events = self[name],
      container = events[event] = events[event] || [],
      id = randomId(),
      index = void 0,
      callback = function callback() {
    index = findIndexById.call(container, id);
    index >= 0 && container.splice(index, 1);
    listener.apply(self, arguments);
  };
  callback[id_Identifier] = id;
  container.push(callback);
};

prototype.emit = function () {
  var self = this,
      argv = [].slice.call(arguments),
      event = argv.shift(),
      events = self[name];
  (events['*'] || []).concat(events[event] || []).forEach(function (listener) {
    return self.emitting(event, argv, listener);
  });
};

prototype.emitting = function (event, dataArray, listener) {
  listener.apply(this, dataArray);
};

module.exports = EventEmitter;

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axetroy_event_emitter_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axetroy_event_emitter_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__axetroy_event_emitter_js__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Socket = function (_EventEmitter) {
  _inherits(Socket, _EventEmitter);

  function Socket() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Socket);

    // init
    var _this = _possibleConstructorReturn(this, (Socket.__proto__ || Object.getPrototypeOf(Socket)).call(this));

    _this.REQUEST_IDENTIFIER = 'Request-Id';
    _this.connected = false;
    _this.req = {}; // 存放发出去的请求
    _this.transform = function (data) {
      return data;
    };
    _this.queue = [];
    _this.retryInterval = 0;

    _this.reqInterceptor = function (method, url, body, headers) {};
    _this.resInterceptor = function (method, url, body, headers, response) {};

    _this.url = config.url;

    _this.connect(config.url);
    return _this;
  }

  /**
   * 创建一个新的实例对象
   * @returns {Socket}
   */


  _createClass(Socket, [{
    key: 'connect',


    /**
     * 连接到socket服务器
     * @param url
     */
    value: function connect(url) {
      var _this2 = this;

      this.ws = null;
      delete this.ws;
      console.count('reconnect...');
      var ws = new WebSocket(url);
      ws.addEventListener('open', function (event) {
        _this2.connected = true;

        // 发送消息队列里的消息
        while (_this2.queue.length) {
          _this2.__send(_this2.queue.shift());
        }

        _this2.emit('open', event.data);
      });

      // 断线自动重连
      ws.addEventListener('close', function (event) {
        _this2.connected = false;
        _this2.retryInterval > 60 ? _this2.retryInterval = 2 : void 0;
        setTimeout(function () {
          return _this2.connect(url);
        }, ++_this2.retryInterval * 1000);
        _this2.emit('closed', event.data);
      });

      // 接收到服务端的推送，则出发message时间
      ws.addEventListener('message', function (event) {
        var data = {};
        try {
          data = _extends({ data: data }, _this2.transform(event.data));
        } catch (err) {
          console.error(err);
        }

        var _ref = data || {},
            header = _ref.header;

        var requestId = header['Request-Id'];
        _this2.__resolve(requestId, data);
        _this2.emit('message', data);
      });

      this.ws = ws;
    }

    /**
     * 清空消息队列
     * @returns {Socket}
     */

  }, {
    key: 'cleanQueue',
    value: function cleanQueue() {
      this.queue = [];
      return this;
    }

    /**
     * 设置header中，请求的标识符，请求id的key名
     * @param str
     */

  }, {
    key: 'setIdentifier',
    value: function setIdentifier(str) {
      this.REQUEST_IDENTIFIER = str;
    }

    /**
     * 请求发出后要resolve
     * @param id
     * @param data
     * @returns {Socket}
     */

  }, {
    key: '__resolve',
    value: function __resolve(id, data) {
      var request = this.req[id];
      console.log(request);
      if (request) {
        var deferred = request.deferred,
            message = request.message;
        var resolve = deferred.resolve,
            reject = deferred.reject;
        var method = message.method,
            url = message.url,
            body = message.body,
            header = message.header;

        // response的拦截器

        try {
          this.resInterceptor(method, url, body, header);
          resolve(data);
        } catch (err) {
          reject({
            message: 'Can not pass response interceptor',
            error: err,
            data: data
          });
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

  }, {
    key: '__send',
    value: function __send(msg) {
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

  }, {
    key: 'request',
    value: function request(method, url) {
      var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var id = parseInt(Math.random() * 100000, 10);
      var self = this;
      header = _extends(_defineProperty({}, self.REQUEST_IDENTIFIER, id + ''), header);
      var message = {
        method: method,
        url: url,
        body: body,
        header: header
      };

      // request的拦截器
      try {
        var newMessage = this.reqInterceptor(method, url, body, header);
        message = _extends({}, message, newMessage);
      } catch (err) {
        return Promise.reject({
          message: 'Can not pass request interceptor',
          error: err,
          data: message
        });
      }

      var raw = '';

      try {
        raw = JSON.stringify(message);
      } catch (err) {
        return Promise.reject({
          message: 'Invalid message',
          error: err,
          data: message
        });
      }

      this.__send(raw);

      return new Promise(function (resolve, reject) {
        self.req[id] = {
          deferred: {
            resolve: resolve,
            reject: reject,
            promise: this
          },
          message: message
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

  }, {
    key: 'get',
    value: function get(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('GET', url, body, headers);
    }

    /**
     * 模拟POST方法
     * @param url
     * @param body
     * @param headers
     * @returns {*}
     */

  }, {
    key: 'post',
    value: function post(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('POST', url, body, headers);
    }

    /**
     * 模拟PUT方法
     * @param url
     * @param body
     * @param headers
     * @returns {*}
     */

  }, {
    key: 'put',
    value: function put(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('PUT', url, body, headers);
    }

    /**
     * 模拟DELETE方法
     * @param url
     * @param body
     * @param headers
     * @returns {*}
     */

  }, {
    key: 'delete',
    value: function _delete(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('DELETE', url, body, headers);
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Socket(arguments);
    }
  }]);

  return Socket;
}(__WEBPACK_IMPORTED_MODULE_0__axetroy_event_emitter_js___default.a);

/* harmony default export */ __webpack_exports__["default"] = Socket;

/***/ })
/******/ ]);
});