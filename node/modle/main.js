var hello = require('./hello');
var hello2 = require('./hello2');
// 使用通过 exports.world=function(){} 的公开模块
hello2.world();

// 使用通过 module.export = function(){} 的公开模块
var he = new hello();
he.setName('flank');
he.sayHello();
console.log('程序执行完毕');

// 如果需要对外暴露属性或者方法使用 exports 就行了。需要暴露对象就用 module.exports