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

    render(selector, btnTxt) {
        // Render our button
        const $container=$(selector);
        const button = Mustache.render(template, {text:btnTxt})
        $container.html( button );
        // Attach our listeners
        $('.button').click(this.onClick.bind(this));
    }
}
