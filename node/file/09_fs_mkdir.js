var http = require("http");
var fs = require("fs");

var count = 0;

var server = http.createServer(function(req,res){
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	count = count + 1;
	fs.mkdir("./fsmkdir/mkdir"+count);

	res.end("./fsmkdir/mkdir"+count);
});

server.listen(3000,"127.0.0.1");