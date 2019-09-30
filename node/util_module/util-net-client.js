var net = require('net');

var client = net.connect({
    port: 8080
}, () => {
    console.log('连接到服务器');
}).on('data', (data) => {
    var buf = Buffer.from(data);
    console.log(buf.toString());
    client.end();
}).on('end', () => {
    console.log('断开与服务器的连接');
});