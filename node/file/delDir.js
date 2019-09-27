// 使用 fs 删除目录
var fs = require('fs');

// 删除目录
fs.rmdir('../file/test', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('读取目录信息');
    fs.readdir('../file', (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        files.forEach((file) => {
            console.log(file);
        });
    });
});
