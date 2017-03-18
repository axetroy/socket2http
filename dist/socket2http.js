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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by axetroy on 2017/3/6.
 */

function randomId() {
  return Math.random().toString(36).substr(2, 16);
}

function EventEmitter() {
  this.e = {};
}

function findIndexById(id) {
  return this.findIndex(function (callback) {
    return callback.__id__ === id;
  });
}

var prototype = EventEmitter.prototype;

prototype.constructor = EventEmitter;

prototype.on = function (event, listener) {
  var self = this,
      container = self.e[event] = self.e[event] || [],
      id = randomId(),
      index = void 0;
  listener.__id__ = id;
  container.push(listener);
  return function () {
    index = findIndexById.call(container, id);
    index >= 0 && container.splice(index, 1);
  };
};

prototype.off = function (event) {
  this.e[event] = [];
};

prototype.clear = function () {
  this.e = {};
};

prototype.once = function (event, listener) {
  var self = this,
      container = self.e[event] = self.e[event] || [],
      _this = self,
      id = randomId(),
      index = void 0,
      callback = function callback() {
    index = findIndexById.call(container, id);
    index >= 0 && container.splice(index, 1);
    listener.apply(_this, arguments);
  };
  callback.__id__ = id;
  container.push(callback);
};

prototype.emit = function () {
  var self = this,
      argv = [].slice.call(arguments),
      event = argv.shift();
  (self.e[event] || []).forEach(function (listener) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by axetroy on 2017/3/18.
 */
var EventEmitter = __webpack_require__(0);

var Socket = function (_EventEmitter) {
  _inherits(Socket, _EventEmitter);

  function Socket() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Socket);

    // init
    var _this = _possibleConstructorReturn(this, (Socket.__proto__ || Object.getPrototypeOf(Socket)).call(this));

    _this.connected = false;
    _this.promise = {};
    _this.transform = function (data) {
      return data;
    };

    _this.url = config.url;

    var ws = _this.ws = new WebSocket(config.url);

    ws.addEventListener('open', function (event) {
      _this.connected = true;
      _this.emit('open', event.data);
    });

    ws.addEventListener('close', function (event) {
      _this.connected = false;
    });

    ws.addEventListener('message', function (event) {
      var response = _this.transform(event.data);
      _this.emit('message', response);
    });

    return _this;
  }

  _createClass(Socket, [{
    key: 'resolve',
    value: function resolve(id, data) {
      var promise = this.promise[id];
      if (promise) {
        promise.resolve(data);
        this.promise[id] = null;
        delete this.promise[id];
      }
    }
  }, {
    key: 'send',
    value: function send(msg) {
      this.ws.send(msg);
      return this;
    }
  }, {
    key: 'request',
    value: function request(method, url) {
      var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var id = Math.random();
      var self = this;
      var entity = {
        method: method,
        url: url,
        body: body,
        headers: Object.assign({ id: id }, headers)
      };
      this.send(JSON.stringify(entity));
      return new Promise(function (resolve, reject) {
        self.promise[id] = {
          resolve: resolve,
          reject: reject,
          promise: this
        };
      });
    }
  }, {
    key: 'get',
    value: function get(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('GET', url, body, headers);
    }
  }, {
    key: 'post',
    value: function post(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('POST', url, body, headers);
    }
  }, {
    key: 'put',
    value: function put(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('PUT', url, body, headers);
    }
  }, {
    key: "delete",
    value: function _delete(url, body) {
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.request('DELETE', url, body, headers);
    }
  }]);

  return Socket;
}(EventEmitter);

exports.default = Socket;

/***/ })
/******/ ]);
});