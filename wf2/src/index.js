// (()=>{ console.log('hello') })();
// const a = {a: 'a'};
// console.log(a);
// const $ = require('jquery');

import $ from 'jquery';
// $('body').html('body content');

import Button from './Components/Button';

const button = new Button('google.com');
button.render('#container', 'click me');

