// 第一个 Express 框架实例
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var fs = require('fs');
var multer = require('multer');



app.use(bodyParser.urlencoded({
    extended: false
}));
// 文件上传路径
app.use(multer({
    dest: '/tmp/'
}).array('image'));
// 处理静态文件
app.use('/public', express.static('public'));

app.post('/file_upload', (request, response) => {
    console.log(request.files[0]); // 上传的文件信息

    var des_file = __dirname + '/' + request.files[0].originalname;
    fs.readFile(request.files[0].path, (err, data) => {
        fs.writeFile(des_file, data, (err) => {
            if (err) {
                console.err(err.message);
            } else {
                params = {
                    message: 'file uploaded successfully',
                    filename: request.files[0].originalname
                }
            }
            console.log(response);
            response.end(JSON.stringify(params));
        });
    });
});


app.get('/upload.htm', (request, response) => {
    response.sendFile(__dirname + '/upload.html');
});



app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/process_get', (request, response) => {
    // 输出 json 格式
    var params = {
        'first_name': request.query.first_name,
        'last_name': request.query.last_name
    }
    console.log(params);
    response.end(JSON.stringify(params));
});

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.post('/process_post', urlencodedParser, (request, response) => {
    // 输出 json 格式
    var params = {
        'first_name': request.body.first_name,
        'last_name': request.body.last_name
    }
    console.log(params);
    response.end(JSON.stringify(params));
});

// 创建 get 请求
app.get('/', (request, response) => {
    response.send('hello world');
});

var server = app.listen(8080, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例的访问地址为 http://%s:%s', host, port);
});