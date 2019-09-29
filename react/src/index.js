import _ from 'lodash'; // 显示引入 lodash 必须是存在的，同时将它绑定到  _ 
import printMe from "./print.js";

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // lodash (目前通过一个 script 脚步引入) 对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());