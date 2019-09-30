// 使用get请求
var http = require('http');
var url = require('url');
var util = require('util');

//  http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // 将请求包含的信息输出
    response.write(util.inspect(url.parse(request.url, true)));
    // 解析请求信息 get
    var params = url.parse(request.url, true).query;
    response.write('\n');
    response.write('参数name的值：' + params.name);
    response.write('\n');
    response.write('参数url的值' + params.url);
    response.end();
}).listen(3000);