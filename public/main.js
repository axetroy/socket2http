/**
 * Created by axetroy on 2017/3/18.
 */

(function () {
  const Socket = Socket2http.default;
  const ws = new Socket({
    url: "ws://localhost:10086"
  });

  ws.transform = function (response) {
    let result = {};
    try {
      result = JSON.parse(response);
      this.resolve(result.id, result.data);
    } catch (err) {

    }
    return result;
  };

  ws.on('open', function () {
    ws.get('https://www.baidu.com')
      .then(function (res) {
        console.info(res);
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  ws.on('message', function (msgRaw) {
    console.log('received:', msgRaw);
  });

  console.log(ws);
})();