/**
 * Created by dell on 2016/3/16.
 */
/**
 * Created by dell on 2016/3/15.
 */
var http=require('http');
var url=require('url');


http.createServer(function(req,res){

    var urlObj=url.parse(req.url,true)
    var pathname=urlObj.pathname;
    if(pathname=='/books'){
        res.end("show(['node.js','java'])")
    }
}).listen(8080);