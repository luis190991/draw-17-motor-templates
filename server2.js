var http = require("http");
var fs = require("fs");


http.createServer(function(req, res){
  fs.readFile("./index.html", function(err, value){

    var html = value.toString();
    var variables = html.match(/[^\{\}]+(?=\})/g);

    var nombre = "Luis";
    var saludo = "que hay";

    for (variable of variables){
      var valor = eval(variable);
      //html = html.replace("{" + variable + "}", valor);
      html = html.replace(`{${variable}}`, valor);

    }

    res.writeHead(200, {"content-type":"text/html"});
    res.write(html);
    res.end();
  });

}).listen(8888);
