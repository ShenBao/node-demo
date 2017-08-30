
var ejs = require("ejs");

//模板
var string = "今年是：<%= a %>年";
//数据
var data = {
    a : 2017
};
//数据绑定
var html = ejs.render(string, data);
//输出
console.log(html);

