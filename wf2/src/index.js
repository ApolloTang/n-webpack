// (()=>{ console.log('hello') })();
// const a = {a: 'a'};
// console.log(a);
// const $ = require('jquery');

import $ from 'jquery';

const el_a = document.querySelectorAll('.my-anchor');
console.log('el_a: ', el_a);
if (el_a.length) {
// if (0) {
    require.ensure([], () => {
        // import Button from './Components/Button'; //<-- SyntaxError: 'import' may only appear at the top level
        const Button = require('./Components/Button').default;
        const button = new Button('google.com');
        button.render('.my-anchor');
    });
}

const el_header = document.querySelectorAll('.my-header');
// if (0) {
if (el_header.length) {
    require.ensure([], () => {
        const Header = require('./Components/Header').default;
        const header = new Header();
        header.render('.my-header');
    });
}

