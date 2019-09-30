var net = require('net');
// 服务端
net.createServer((connect) => {
    console.log('client connect');
    connect.on('end', () => {
        console.log('client close');
    });
    connect.write('hello client\r\n');
    connect.pipe(connect);
}).listen(8080, () => {
    console.log('server start listen');
});