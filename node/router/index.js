// 引入自定义的服务和路由模块
var route = require('./router');
var server = require('./server');

// 启动服务同时将路由作为参数传入
server.start(route.router);