// 通过使用 open方法的 fd 读取文件信息
var fs = require('fs');
var buffer = Buffer.alloc(1024);

// 准备打开已经存在的文件
fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('文件打开成功');
    console.log('使用 fd 读取文件信息');
    // 1、表示用fs.open()方法返回的文件描述符  2、表示读取信息存放的缓存区  3、缓存区写入的偏移量  4、表示要从文件读取的字节数  5、表示文件读取的起始位置  6、回调
    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(bytes + ' 个字节被读取');
        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buffer.slice(0, bytes).toString());
        }
        // 关闭文件  1、通过fs.open() 方法返回的文件描述符   2、回调
        fs.close(fd, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('文件关闭成功');
        });
    });
});