// 引入 http 和 url 模块
var http = require('http');
var url = require('url');

// 将路由当做参数传入
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');

        route(pathname);// 使用路由方法

        response.writeHead(200, { 'Content-Type': 'text/plain' });

        response.write('hello world');

        response.end();
    }
    // 创建服务，监听 8888 端口
    http.createServer(onRequest).listen(8888);

    console.log('服务启动成功！');
}
// 将服务模块公开
exports.start = start;