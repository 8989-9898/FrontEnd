// 使用回调的方式读取文件 ,非阻塞

var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});
console.log('程序运行结束');