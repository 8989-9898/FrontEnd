// 使用管道流，进行文件读写操作
var fs = require('fs');
// 创建一个可读流
var readStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

// 管道流读写操作
// 将 input.txt 文件内容读出写入 output.txt 文件
readStream.pipe(writeStream);

console.log('程序执行完成');