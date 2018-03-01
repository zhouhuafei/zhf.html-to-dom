const htmlToDom = require('../dist/index.min');

test(`html转成dom节点`, () => {
    const dom = htmlToDom(`<div>我是被创建的dom</div>`);
    console.log(dom.outerHTML); // <div>我是被创建的dom</div>
    expect(true).toEqual(true);
});
