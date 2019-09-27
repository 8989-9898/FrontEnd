// 使用 fs 读取目录信息
var fs = require('fs');

// 读取指定目录下的文件
fs.readdir('../file', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    //输出目录下的文件
    files.forEach((file) => { console.log(file) });
});