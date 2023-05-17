'use strict';
//content by web dev simplified
//Hoisting
console.log(`sumFun(1,2)=>${sumFun(1,2)}`)//prints 3 due to hoistning
console.log(`sumConst(3,4)=>${sumConst(3,4)}`)//cannot print and throes an error not defined as javascript executes code from top to bottom
function sumFun(a,b){//example of function hoisting
    return a+b;
}

j=15;
console.log(j);//prints 15
const sumConst=(a,b)=>a+b;
var j=450;

//Hoisting is when javascript takes your code 
//as if it was defined at the very top of the code, we hoist
//variables using var key word
//and hoist functions using function keyword to
//define the function as in the examples in the top 
//of this comment