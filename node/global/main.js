// nodejs 的全局变量  全局对象是 global
console.log(__filename);// 正在执行的脚步文件绝对路径，如果在模块中就输出模块文件的路径

console.log(__dirname);// 正在执行的脚步文件所在的文件夹

setTimeout(() => {
    console.log('在两秒钟之后执行一次');
}, 2000);

// clearTimeout(F); // 清除 setTimeout()定时任务。

setInterval(() => {
    console.log('间隔两秒执行一次');
}, 2000);

// clearInterval(F); 清除 setInterval() 定时任务。

// % 表示占位符
console.log('asdf%asdf', 1243);

console.error('输出错误信息');

// 当前执行的代码在堆栈中的调用路径
console.trace();

console.info('程序开始执行');

var counter = 10;
console.log('计数 %d', counter);
console.time('数据获取');// 开始计时
console.timeEnd('数据获取'); // 计时结束

console.log('程序执行完毕');


