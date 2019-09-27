// 使用 fs 模块创建目录
var fs = require('fs');

// 创建目录, recursive:true 表示递归创建默认false，可以不写只能创建一个
fs.mkdir('./test/test', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('目录创建成功');
});

