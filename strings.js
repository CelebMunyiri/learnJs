'use strict';
const airline='TAP Air Portugal'
const plane='A320'
console.log(plane[0])
console.log(plane[1])
console.log(airline.length)//length
console.log(airline.indexOf('r'))//first r
console.log(airline.lastIndexOf('r'))//last r
//space counts as a character in strings
console.log(airline.indexOf('Portugal'))
//use of slice method in strings
console.log(airline.slice(4));