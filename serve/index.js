/**
 * Created by axetroy on 2017/3/18.
 */
const WebSocket = require('ws');
const axios = require('axios');

let WebSocketServer = WebSocket.Server;
let wss = new WebSocketServer({port: 10086});

wss.on('connection', function connection(ws) {

  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send('hello world');
    }
  });

  ws.on('message', function incoming(message) {
    console.log('received:', message);

    let req;
    try {
      const request = JSON.parse(message);
      req = {};
      req.method = request.method;
      req.url = request.url;
      req.data = request.body;
      req.headers = request.headers;
    } catch (err) {

    }
    if (req) {
      axios(req)
        .then(function (res) {
          const response = {data: res.data};
          if (req.headers.id) {
            response.id = req.headers.id;
          }
          ws.send(JSON.stringify(response));
        })
        .catch(function (err) {
          const response = {data: err + ''};
          if (req.headers.id) {
            response.id = req.headers.id;
          }
          ws.send(JSON.stringify(response));
        });
    } else {
      ws.send('invalid request');
    }
  });
});