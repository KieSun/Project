import j from 'jquery'
import _ from 'lodash'


function component () {
    var element = j('<div></div>');

    /* lodash is required for the next line to work */
    element.html(_.join(['Hello','webpack'], ' '));

    return element.get(0);
}

document.body.appendChild(component());