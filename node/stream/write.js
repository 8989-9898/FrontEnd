// 写入流
var fs = require('fs');
var data = "使用 stream 模块进行数据写入！";

var writeStream = fs.createWriteStream('output.txt');

// 使用utf8 编码将数据写入文本
writeStream.write(data, 'utf8');

// 标记文本末尾，写入完成
writeStream.end();

writeStream.on('finish', function () {
    console.log('文件信息写入成功');
});

writeStream.on('error', function (err) {
    console.log(err);
});

console.log('程序执行完毕');