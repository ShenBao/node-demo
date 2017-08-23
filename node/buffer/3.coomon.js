var buf1 = new Buffer('沈');
var buf2 = new Buffer('宝');
var buf3 = new Buffer('雨');
var buf4 = new Buffer('飘');
/*
var all = Buffer.concat([buf1,buf2,buf3,buf4],12);
console.log(all.toString('utf8'));
var s = all.slice(9,12);
console.log(s.toString());
*/

//Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend)
var buffers = new Buffer(12);
buf1.copy(buffers,0,0,3);
buf2.copy(buffers,3,0,3);
buf3.copy(buffers,6,0,3);
buf4.copy(buffers,9,0,3);
console.log(buffers.toString('utf8'));
//自己实现一个 Buffer.concat

console.log(Buffer.byteLength("xb雨飘"));

