// 使用 js 模块将数据写入文件
var fs = require('fs');
// 写入数据到文件 （异步）
fs.writeFile('output.txt', '通fs模块的writeFile异步写入文件', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('数据写入文件成功');
    console.log('开始读取写入的信息');
    fs.readFile('output.txt', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('异步读取的文件内容：' + data.toString());
    });
});