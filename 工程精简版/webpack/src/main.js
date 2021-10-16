import a from './a.js';
import b from './b.js';
import "./first.less";
import $ from 'jquery';
import url from './7.jpg';
console.log(a, b)
$('<h1></h1>').text("hello webpack!").appendTo($(document.body));
$('<img></img>').attr('src', url).appendTo($(document.body));