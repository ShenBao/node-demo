var express = require("express");

var app = express();

app.get("/",function(req,res){
    console.log(req.query);
    res.send('成功');
});

app.listen(80);

// http://localhost?name=test