var express = require("express");
var app = express();
var fs = require("fs");

// 获取所有数据
app.get('/listUsers', (request, response) => {
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        if (err) {
            console.log('无效路径');
        }
        response.end(data);
    });
});

//添加数据
var user = {
    "user4": {
        "name": "suresh4",
        "password": "password4",
        "profession": "librarian",
        "id": 4
    }
}

app.get('/addUser', (request, response) => {
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        response.end(JSON.stringify(data));
    });
});


//删除一条数据
var id = 2;
app.get('/deleteUser', (request, response) => {
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        delete data['user' + id];
        console.log(data);
        response.end(JSON.stringify(data));
    });
});

// 按照 id获取数据
app.get('/:id', (request, response) => {
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        var user = data['user' + request.params.id];
        console.log(user);
        response.end(JSON.stringify(user));
    })
});
var server = app.listen(8080, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例的访问地址是：http://%s%s', host, port);
});