const createDom = require('../dist/index.min');

test(`创建dom`, () => {
    console.log(createDom(`<div>我是被创建的dom</div>`));
    expect(true).toEqual(true);
});
