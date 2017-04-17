import j from 'jquery'
import _ from 'lodash'
import { cube, foo } from './foot'


function component () {
    var element = j('<div></div>');

    /* lodash is required for the next line to work */
    element.html(_.join(['Hi','webpack'], ' '));

    return element.get(0);
}

console.log(cube(3));
console.log(foo);
document.body.appendChild(component());