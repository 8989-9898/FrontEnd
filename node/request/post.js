var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer((request, response) => {
    var post = ''; // 保存请求信息

    // 监听 data 事件，保存请求数据
    request.on('data', (chunk) => {
        post += chunk;
    });

    // 监听 end 事件， 使用querystring 将请求数据解析成真正的 post 请求格式，然后输出
    request.on('end', () => {
        post = querystring.parse(post);
        response.end(post);
    });

}).listen(3000);