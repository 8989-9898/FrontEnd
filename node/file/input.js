// 使用文件读取模块 fs
var fs = require('fs');

// 异步读取文件内容
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('异步读取文件信息：' + data.toString());
});

// 同步读取文件内容
var data = fs.readFileSync('input.txt');
console.log('同步读取文件信息：' + data.toString());


// 打开文件信息(异步)
console.log('准备打开文件');
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件打开成功');
});

console.log('程序执行完毕');

// 获取文件信息
fs.stat('input.txt', function (err, stats) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stats);
    console.log('文件信息读取成功');
    console.log('是否是文件：' + stats.isFile());
    console.log('是否是目录：' + stats.isDirectory());
});