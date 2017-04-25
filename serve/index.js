/**
 * Created by axetroy on 2017/3/18.
 */
const EventEmitter = require('events').EventEmitter;
const WebSocket = require('ws');
const axios = require('axios');

let WebSocketServer = WebSocket.Server;
let wss = new WebSocketServer({ port: 10086 });

const event = new EventEmitter();

exports.event = event;

wss.on('connection', function connection(ws) {
  wss.clients.forEach(function each(client) {
    event.emit('open', client);
  });

  ws.on('message', function incoming(message) {
    console.log('received:', message);
    let request = {};
    try {
      request = JSON.parse(message);
    } catch (err) {
      console.error(err);
    }

    const { method = 'GET', url = '', body = '', header = {} } = request;

    const requestId = header['Request-Id'] || null;

    axios({
      method,
      url,
      header,
      data: body
    })
      .then(function(res) {
        const response = {
          method,
          url,
          body: res.data,
          header: Object.assign(header, { 'Request-Id': requestId }),
          status: 200
        };
        ws.send(JSON.stringify(response));
      })
      .catch(function(err) {
        const response = {
          method,
          url,
          body: err + '',
          header: Object.assign(header, { 'Request-Id': requestId }),
          status: 400
        };
        ws.send(JSON.stringify(response));
      });
  });
});
