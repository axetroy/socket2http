/**
 * Created by axetroy on 2017/3/18.
 */

(function() {
  const Socket = Socket2http.default;
  const ws = new Socket({
    url: 'ws://localhost:10086'
  });

  ws.on('message', function(msgRaw) {
    console.log('received:', msgRaw);
  });

  console.log(ws);
})();
