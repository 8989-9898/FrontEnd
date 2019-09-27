// 使用全局变量 process

// code 表示退出码 该事件在程序执行完毕后执行
process.on('exit', function (code) {
    setTimeout(() => {
        console.log('该代码永远不会执行');
    }, 0);
    console.log('退出码为:' + code);
});

console.log('程序执行结束');

process.stdout.write('输出信息到终端\n');
// 通过参数读取
process.argv.forEach(function (val, index, arrar) {
    console.log(index + ':' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

// 输出当前目录
console.log('当前目录:' + process.cwd());
// 输出当前版本信息
console.log('版本信息:' + process.version);
// 输出内存使用情况
console.log(process.memoryUsage());