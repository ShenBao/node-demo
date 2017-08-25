var url = require('url');
var querystring = require('querystring');

console.log(url.parse(
    'http://shenbao:shenbaoone@gmail.com@github.com:80/ShenBao?name=shenbao'));

console.log(querystring.parse('name=shenbao'));