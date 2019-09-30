var express = require('express');
var app = express();

app.get('/', (request, response) => {
    console.log('主页 get 请求');
    response.send('hello get');
});

app.post('/', (request, response) => {
    console.log('主页 post 请求');
    response.send('hello post');
});

app.get('/del_user', (request, response) => {
    console.log('/del_user get 请求');
    response.send('删除页面');
});

app.get('/list_user', (request, response) => {
    console.log('./list_user get 请求');
    response.send('获取所有用户信息');
});

app.get('/ad*cd', (request, response) => {
    console.log('/ad*cb get 请求');
    response.send('正则匹配');
});

var server = app.listen(8080, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例的访问地址为 http://%s:%s', host, port);
});