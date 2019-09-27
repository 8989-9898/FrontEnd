// 使用fs截取文件信息
var fs = require('fs');
var buffer = Buffer.alloc(1024);

fs.open('truncate.txt', 'r+', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('文件打开成功，开始截取文件内容');
    fs.ftruncate(fd, 10, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('文件信息截取成功');
        console.log('开始读取截取的文件信息');
        fs.read(fd, buffer, 0, buffer.length, 0, (err, types) => {
            if (err) {
                console.error(err);
                return;
            }
            if (types > 0) {
                console.log(buffer.slice(0, types).toString());
            }

            fs.close(fd, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    });
});