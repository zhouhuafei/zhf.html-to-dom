function createDom(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.childNodes[0];
}

module.exports = createDom;
