// 使用 nodejs 的 os 工具模块
var os = require('os');

console.log('CPU 的字节序：' + os.endianness());
console.log('操作系统的主机名：', os.hostname());
console.log('操作系统名：', os.type());
console.log('编译时的操作系统名：', os.platform());
console.log('操作系统的cpu架构：', os.arch());
console.log('操作系统的发行版本：', os.release());
console.log('操作系统的运行时间：', os.uptime());
console.log('返回一个包含 1、5、15 分钟平均负载的数组：', os.loadavg());
console.log('系统内存总量（字节）：', os.totalmem());
console.log('操作系统的空闲内存量（字节）：', os.freemem());
console.log('每个cpu的信息：', os.cpus());
console.log('网络接口列表：', os.networkInterfaces());
console.log('操作系统的行尾符的常量：' + os.EOL);