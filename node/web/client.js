var http = require('http');

// 用于请求
var options = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'
};

var req = http.request(options, (response) => {
    var body = '';
    // 接收数据
    response.on('data', (data) => {
        console.log('data');
        body += data;
    });
    response.on('end', () => {
        console.log('end');
        // 数据接收完成
        console.log(body);
    });

    console.log('client request');
});

req.end();