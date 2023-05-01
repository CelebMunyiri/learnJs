//Day 1 starts here
//using curly braces to write a code block
let a=5;
let b=8;
if (a>b){
    console.log('a is greater then b');

}
else{
    console.log('b is greater');
}
 //variable with values declaration
 let message="Hello ", counter="64";
 console.log(message +counter);
 //variable shadowing
 let mess='hii';
 function say(){
    let mess="hey";
    console.log(mess);
 }
 say();//hey
 console.log(mess);//hii
 //accessing global variable inside a functions
 let name='David';
 function munYiri(){
    name='celeb';
    console.log(name);
 }
 munYiri();
 console.log(name);
 //Javascript data types. Day 2 starts here
 let count=120;// here count is a number
 console.log(typeof(count));//is a number

 let obj=null;
 console.log(typeof(obj));
 //Javascript uses IEEE-754 format to represent both integers and floating numbers
 //integer number
 let num=100;
 console.log(num);
 let oct=060;// octal number, you must start with zero and multiplies the number with 8(base 8) range is 0-7
 console.log(oct);
 let d=090;
 console.log(d);//this one is interpreted as 90
 let c=0xa;//hexadecimal numbers
 console.log(c);
 //creating an object in javascript
 let person={
    firstName:'John',lastname:'Mwas'
 };
 console.log(person);
 //nesting an object
 let cutomerInfo={
    name1:"Farida",name2:"Joe",country:{
        county:'Nakuru',bulding:'4000'
    }
 }
 console.log(cutomerInfo);
 //Javascript numbers
 let numb=new Number(20);
 console.log(num.valueOf());
 console.log(num.toString());//convrting to string