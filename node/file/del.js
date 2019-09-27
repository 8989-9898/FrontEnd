// 使用 js 模块删除文件
var fs = require('fs');

console.log('准备删除文件');
fs.unlink('del.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('文件删除成功');
});