# Socket2http

一个用socket代替http的库

## 使用

```javascript
const Socket2http = require('socket2http');
const ws = new Socket({
  url: 'ws://localhost:10086'
});
ws
    .get(`https://www.example.com`)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.error(err);
    });
```

## Property

ws.reqInterceptor
ws.transform
ws.resInterceptor


## 数据格式

客服端请求格式
```json
{
  "method": "GET",
  "url": "http://www.example.com",
  "header": {
    "Request-id": "233"
  }
}
```

服务端返回格式
```json
{
  "method": "",
  "url": "http://www.example.com",
  "header": {
    "Request-id": "233"
  },
  "body": "<html>...</html>"
}
```

### 数据流

data >>> reqInterceptor >>> 服务器 >>> transform >>> resInterceptor