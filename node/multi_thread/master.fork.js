// 使用nodejs 的多进程 child_process.fork() 方法
var fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.fork('support.js', [i]);

    workerProcess.on('exit', (code) => {
        console.log('子进程已经退出，退出码：' + code);
    });
}