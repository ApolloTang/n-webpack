// (()=>{ console.log('hello') })();
// const a = {a: 'a'};
// console.log(a);
// const $ = require('jquery');

import $ from 'jquery';

const el_a = document.querySelectorAll('.my-anchor');
console.log('el_a: ', el_a);
if (el_a.length) {
    require.ensure([], () => {
        // import Button from './Components/Button'; //<-- SyntaxError: 'import' may only appear at the top level
        const Button = require('./Components/Button').default;
        const button = new Button('google.com');
        button.render('.my-anchor');
    });
}

// If we have a title, render the Header component on it
const el_h1 = document.querySelectorAll('h1');
if (el_h1.length) {
    require.ensure([], () => {
        const Header = require('./Components/Header');
        const header = new Header();
        header.replace('h1');
    });
}

