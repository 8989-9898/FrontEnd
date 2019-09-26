var buffer = Buffer.from('test');
console.log(buffer.toString());

// 使用 buffer 处理数据流
const buf = Buffer.from('flank', 'ascii');
// 以不同的字符集输出
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

// 创建一个长度为10、且用0填充的Buffer
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10 且用 0x1 填充的 Buffer
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10 且未初始化的 Buffer
// 比 alloc() 方法更快
// 单返回的 buffer 可能包含旧数据
// 因此需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 0x1 0x2 0x3 0x4 0x5  的buffer
const buf4 = Buffer.from([1, 2, 3, 4, 5]);

// 创建一个包含 utf-8 字节的 buffer
const buf5 = Buffer.from('test');

// 创建一个Latin-1 字节的buffer
const buf6 = Buffer.from('test', 'latin1');


const buf7 = Buffer.alloc(250);
// write 方法的参数，第一个是写入缓存区的字符，第二个是缓冲区写入的索引值，默认 0 ，第三个是写入的字节数，默认是缓冲区的最大值 ， 第四个参数的使用的字符集编码
const len = buf7.write('李四-flank');
console.log('实际写入的字节数：' + len);

const buf8 = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buf8[i] = i + 97;
}

// 从缓存区读取数据的方法 buffer.toString(arg,arg,arg);
// 第一个参数是使用的字符集编码,默认 utf8， 第二个是指定开始读取的索引位置，默认 0  。第三个参数是读取结束的位置，默认为缓冲区的末尾。
console.log(buf8.toString('ascii'));
console.log(buf8.toString('ascii', 0, 5));
console.log(buf8.toString('utf8', 0, 5));
console.log(buf8.toString(undefined, 0, 5));

// 将 Buffer 转换为 JSON 对象
const buf9 = Buffer.from([1, 2, 3, 4, 5]);
const json = JSON.stringify(buf9);
console.log(json);  // 结果：{"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy); // 结果:<Buffer 01 02 03 04 05>

const buf10 = Buffer.from('flank');
const buf11 = Buffer.from(' nodejs');
// 缓存合并，可以合并多个，第一个参数是需要合并的缓存，第二个参数是合并出的新的缓冲的大小
const buf12 = Buffer.concat([buf10, buf11]);
console.log(buf12.toString());