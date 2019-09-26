// 引入文件操作模块
var fs = require('fs');
var data = "";

// 创建可读流
var readStream = fs.createReadStream('input.txt');
// 设置编码为 utf8
readStream.setEncoding('utf8');

// 处理流事件 --->  data , error , end ,finish
readStream.on('data', function (chunk) {
    data += chunk;// 读取文件流信息
});

readStream.on('end', function () {
    console.log(data);// 文件信息读取完毕
});

readStream.on('error', function (err) {
    console.log(err);//文件流读取发送异常
});

console.log('程序执行完成');