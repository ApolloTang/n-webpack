import $ from 'jquery';
import Mustache from 'mustache';
import template from './Header.html';
import './Header.scss';

export default class Header {
    render(selector) {
        const $node = $(selector);
        const text = $node.text();
        const header = Mustache.render(template, {text})

        console.log('$node: ', $node);
        console.log('text: ', text);
        console.log('header: ', header);

        $node.html( header );
    }
}
