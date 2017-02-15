var http = require("http");
var fs = require("fs");

var texto = fs.readFileSync("./index.html");

http.createServer(function(req, res){
  res.writeHead(200, {"content-type":"text/html"});
  res.write(texto);
  res.end();
}).listen(8888);
