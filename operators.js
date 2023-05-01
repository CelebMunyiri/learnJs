//Unary operators



let s="10";
console.log(+s);//a ichanged backed from string to number
let f=false;
let t=true;
console.log(f);// prints out 0 for false
console.log(+t);//prints out 1 for true
//lets deal with object and method using unary operators
let product={
    valueOf:function(){
        return 60;
    }
};
console.log(+product);// prints 60
// Increment and Decrtement operators
let dan=8;
++dan;//prints 9
console.log(dan);//9
let bab=10;
--bab;
console.log(bab);//proints 9 after value is reduced by 1
let x=20;
let y=10;
let z=--y+x;
console.log(z);//prints out 29 as the first value is decremented then sum of the remainder is done
//comparison operators
let r1=20>10;//true
console.log(r1);
let r2=20<10;//false
console.log(r2);
let r3=10==10;//true
console.log(r3);
let name='munyiri';
const date=new Date();
console.log(date);
let person={
    name:'David',
    age:25,

};


