// 使用 util 工具模块的方法
var util = require('util');

// 定义一个 Base  对象
function Base() {
    this.name = 'base';
    this.age = 1991;
    this.sayHello = function () {
        console.log('hello ' + this.name);
    }
}

// 为Base 对象添加原型函数
Base.prototype.showName = function () {
    console.log(this.name);
};

// 定义 sub 对象
function Sub() {
    this.name = 'sub';
};

// 使用 util 的 inherits 方法使 Sub 继承 Base 的原型函数。该方法不会继承 Base 的构造函数内的属性和方法，只会继承原型方法
util.inherits(Sub, Base);

var base = new Base();
base.sayHello();
base.showName();

var sub = new Sub();
// sub.sayHello();  // 该方法不是原型方法不能使用
sub.showName();

console.log(base);
console.log(sub);

// util.inspect(Object, showhidden, depth, color); 方法将对象转为字符串输出
// object 要输出的对象，showHidden 是否输出更多的隐藏信息。depth 表示输出的递归层次默认2，null表示遍历完整个对象链。 color 表示输出在终端时的ANSI颜色
function Person() {
    this.name = 'flank';
    this.toString = function () {
        return this.name;
    }
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true, null, true));

// 判断一个对象是否是数组
console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));

// 判读一个对象是否是 正则表达式
console.log(util.isRegExp(/some regexp/));

console.log(util.isRegExp(new RegExp('flank regexp')));

console.log(util.isRegExp({}));

// 判断给定对象是否是日期
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));
// 判断一个对象是否是 error 对象
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({}));