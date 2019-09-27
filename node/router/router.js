// 定义路由方法，输出请求的路径名
function route(pathname) {
    console.log('about to route a request for ' + pathname);
}

//将路由模块公开
exports.router = route;