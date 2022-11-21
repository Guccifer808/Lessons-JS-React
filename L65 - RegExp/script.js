"use strict";

// classic way
// new RegExp("pattern", "flags");

// typical way
// /pattern/f

// practice
// use reg exp with .search
// tells position index where 1st pattern was found. Otherwise it will return -1
const name = prompt("Enter your name");

const reg = /n/gi;
// flags: can be combined i.e. /RegExp/gim
// i - find index
// g - find global
// m - multi lines

// Search method
// console.log(name.search(reg));

// Match method - returns Array
// console.log(name.match(reg));

// Replace method. Takes 2 params - what to find and replacement
// const pass = prompt("Enter your password");
// /./ - means all
// console.log(pass.replace(/./g, "*"));

// Экранирование символа with \
// Search exactl symbol
// pass.replace(/\./g, "*");
// pass.replace(/\\/g, "*");
// pass.replace(/\&/g, "*");
// pass.replace(/\|/g, "*");

console.log("12-34-56".replace(/-/g, ":"));

// Test method
// test if regExp has tests
// returns true/false

console.log(reg.test(name));

// Reg Exp Classes
// \d - digits
// \w - words/letters
// \s - spaces

// Match only digits and get an array
const reg1 = /\d/g;
// console.log(answer.match(reg1));

// Match only: word digit word digit pattern
const str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/));

// Exclude search classes, reverse match
// Also returns array
// \D - not digits
// \W - not words/letters
