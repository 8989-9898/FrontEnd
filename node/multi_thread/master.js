// 使用nodejs 的多进程 child_process.exec() 方法
var fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node support.js ' + i, (err, stdout, stderr) => {
        if (err) {
            console.log(err.stack);
            console.log('error code' + err.code);
            console.log('signal received' + err.signal);
            return;
        }
        console.log('stdout:' + stdout);
        console.log('stderr:' + stderr);
    });

    workerProcess.on('exit', (code) => {
        console.log('子进程已经退出，退出码：' + code);
    });
}