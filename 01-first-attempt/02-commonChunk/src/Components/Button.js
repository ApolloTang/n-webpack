import $ from 'jquery';
import template from './Button.html';
import Mustache from 'mustache';
import './Button.scss';

export default class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        alert(this.link);
    }

    render(node) {
        const $node = $(node);
        const text = $node.text();
        const btn = Mustache.render(template, {text})

        console.log('$node: ', $node);
        console.log('text: ', text);
        console.log('btn: ', btn);

        // Render our button
        $(node).html( btn );

        // Attach our listeners
        $('.button').click(this.onClick.bind(this));
    }
}
