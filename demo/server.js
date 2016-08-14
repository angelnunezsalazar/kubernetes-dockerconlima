var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello Kubernetes! - 1.0');
});

server.listen(8080);

console.log("Server running at http://127.0.0.1:8080/");
