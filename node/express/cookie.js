var express = require('express');
var cookie = require('cookie-parser');
var util = require('util');

var app = express();

app.use(cookie());

app.get('/', (request, response) => {
    console.log('Cookies :' + util.inspect(request.cookies));
}).listen('8080');