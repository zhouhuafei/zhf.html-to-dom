# html转成dom节点
```
const htmlToDom = require('zhf.html-to-dom');

const dom = htmlToDom(`<div>我是被创建的dom</div>`);

console.log(dom.outerHTML); // <div>我是被创建的dom</div>
```
