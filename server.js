var http = require("http");
var hello = require("./hello.js");
http.createServer(function(request,response){
	if (request.body) {
		console.log(request.body.username);
	    console.log(request.body.pwd);
	}
	response.writeHead(200,{"Content-type":"text/html"});
	hello.read(response);	
}).listen(8883);
console.log("Server has started.");