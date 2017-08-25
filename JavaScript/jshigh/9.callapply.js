function say(city,word){
    console.log(this.name,city,word);
}
say('xiaoYi','hello');
var person = {name:'ShenBao'};
// apply第一个参数指定了函数运行时的this对象
say.apply(person,['xiaoYi','hello']);
say.call(person,'xiaoYi','hello');

var newSay = say.bind(person,'city');
newSay('word');


