'use strict';

function domCreate(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}

module.exports = domCreate;