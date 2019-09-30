// 使用 nodejs 创建 web 服务端
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((request, response) => {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    console.log('request for ' + pathname + " received");

    // 从文件系统中读取请求的文件内容
    fs.readFile('./' + pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            // 响应文件内容
            response.write(data.toString());
        }
        // 发送响应
        response.end();
    });

}).listen(8080);

console.log('server running is http://127.0.0.1:8080');