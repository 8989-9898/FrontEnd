// 链式流 解压缩
var fs = require('fs');
var zlib = require('zlib');

// 将 input.txt.gz 压缩文件解压 为 input.txt
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input2.txt'));

console.log('程序执行完成');