const htmlToDom = require('../dist/index.min');

test(`创建dom`, () => {
    const dom = htmlToDom(`<div>我是被创建的dom1</div><div>我是被创建的dom2</div>`);
    console.log(dom);
    expect(true).toEqual(true);
});
