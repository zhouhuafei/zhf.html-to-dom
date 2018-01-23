const createDom = require('../dist/index.min');

test(`创建dom`, () => {
    const dom = createDom(`<div>我是被创建的dom</div>`);
    console.log(dom.outerHTML);
    expect(true).toEqual(true);
});
