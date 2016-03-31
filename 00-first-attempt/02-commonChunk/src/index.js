import $ from 'jquery';

// swap header with component header
const el_header = document.querySelectorAll('.my-header');
if (el_header.length) {
    require.ensure([], () => {
        const Header = require('./Components/Header').default;
        const header = new Header();
        header.render('.my-header');
    });
}

// 10 second later swap achor with component anchor
const el_a = document.querySelectorAll('.my-anchor');
setTimeout( ()=>{
    require.ensure([], () => {
        // import Button from './Components/Button'; //<-- SyntaxError: 'import' may only appear at the top level
        const Button = require('./Components/Button').default;
        const button = new Button('google.com');
        button.render('.my-anchor');
    });
}, 10000);

