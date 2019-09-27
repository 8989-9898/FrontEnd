// 自定义 nodejs 的模块
function Hello() {
    var name;
    this.setName = function (thyName) {
        this.name = thyName;
    }
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    }
}
// 使用 module.exports 将该对象公开成一个模块

module.exports = Hello;
