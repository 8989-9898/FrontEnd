// 使用域名解析 dns
var dns = require('dns');

dns.lookup('www.github.com', (err, address, family) => {
    console.log('ip地址是:' + address);
    dns.reverse(address, (err, hostname) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(hostname);
        console.log('反向解析：' + address + ':' + JSON.stringify(hostname));
    });
});