/**
 * Created by axetroy on 2017/3/18.
 */

(function() {
  const Socket = Socket2http.default;
  let ws;
  function main() {
    ws = new Socket({
      url: 'ws://localhost:9088'
    });

    ws.reqInterceptor = function(method, url, body, header) {
      // console.info('request', method, url, body, header);
    };

    ws.transform = function(body) {
      return JSON.parse(body);
    };

    ws.resInterceptor = function(method, url, body, header) {
      // console.log('response', method, url, body, header);
    };

    ws.on('message', function(msgRaw) {
      console.log('received:', msgRaw);
    });

    document.querySelector('#request').addEventListener(
      'click',
      function(event) {
        let method = document.querySelector('#method').value;
        let url = document.querySelector('#url').value;
        let body = document.querySelector('#body').value;
        let $console = document.querySelector('.response');
        ws
          .request(method, url, body)
          .then(function(res) {
            $console.innerText = JSON.stringify(res, null, 2);
          })
          .catch(function(err) {
            $console.innerText = JSON.stringify(err, null, 2);
          });
      },
      false
    );
  }

  main();
})();
