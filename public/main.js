/**
 * Created by axetroy on 2017/3/18.
 */

(function() {
  const Socket = Socket2http.default;
  const ws = new Socket({
    url: 'ws://localhost:10086'
  });

  ws.reqInterceptor = function(method, url, body, header) {
    console.info('request', method, url, body, header);
  };

  ws.transform = function(body) {
    return JSON.parse(body);
  };

  ws.resInterceptor = function(method, url, body, header) {
    console.log('response', method, url, body, header);
  };

  ws.on('message', function(msgRaw) {
    console.log('received:', msgRaw);
  });

  ws
    .get(`https://www.baidu.com`)
    .then(function(res) {
      console.log('resolve', res);
    })
    .catch(function(err) {
      console.error('reject', err);
    });

  console.log(ws);
})();
