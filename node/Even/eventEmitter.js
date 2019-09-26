// events 的事件处理
var event = require("events");
var eventEmitter = new event.EventEmitter();

var listener1 = function () {
    console.log('监听器 listener1 执行');
}

var listener2 = function () {
    console.log('监听器 listener2 执行');
}

// 以不同的方式添加监听事件
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

// 获取 connection 事件的监听器有几个
var listenerCount = eventEmitter.listenerCount('connection');
console.log(listenerCount + '个监听器监听连接事件');

// 触发 connection 事件
eventEmitter.emit('connection');

// 移除一个 connection 的监听事件 listener1
eventEmitter.removeListener('connection', listener1);



listenerCount = eventEmitter.listenerCount('connection');
console.log(listenerCount + '个监听器监听连接事件');

// 触发 connection 事件
eventEmitter.emit('connection');


// 触发 error 事件
eventEmitter.emit('error');

console.log('程序执行完成');