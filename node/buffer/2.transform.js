/**
 * Created by Administrator on 2016/3/5.
 */

//buf.toString([encoding[, start[, end]]]);
//字符串转buffer
var buffer = new Buffer('雨飘','utf8');
console.log(buffer);
//buffer转字符串
console.log(buffer.toString('utf8',3,6));