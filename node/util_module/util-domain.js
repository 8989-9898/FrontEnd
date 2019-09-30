// 域
var domain = require('domain');
var EventEmitter = require('events').EventEmitter;

var event1 = new EventEmitter();

// 创建域
var domain1 = domain.create();

// 处理异常
domain1.on('error', (err) => {
    console.log('domain1 处理异常' + err.message);
});

// 显示绑定
domain1.add(event1);
event1.on('error', (err) => {
    console.log('监听器处理错误 ' + err.message);
});

event1.emit('error', new Error('通监听器处理'));
event1.removeAllListeners('error');
event1.emit('error', new Error('通domain1处理'));

var domain2 = domain.create();

domain2.on('error', (err) => {
    console.log('通过 domain 2处理 ' + err.message);
});

// 隐式绑定
domain2.run(() => {
    var event2 = new EventEmitter();
    event2.emit('error', new Error('通过domain2处理'));
});

// 移除显示绑定
domain2.remove(event1);

event1.emit('error', new Error('转换为异常，系统将崩溃'));