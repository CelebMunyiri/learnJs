'use strict';
//The for loop => allows you to iterate over a block of code for a specific number of times. It consists of three parts
//initialization;condition;increment/decrement
//example
/*

for(let i=0;i<5;i++){
    console.log(i);
}

//The while loop=> repeatedly executes a block of code as long as a specified condition is true
//example
let i=0;
while(i<5){
    console.log(i)
    i++
}
//the do-while loop=>similar to while loop but ensures that the code block
//is execeted at least once before checking the condition
//Example 
let i=0;
do{
    console.log(i)
    i++;
}
while(i<5)
//The for in loop=>used to iterate over the enumerable properties of an object
//It iterates over the keys or property names
const person={
    name:'John',
    age:30,
    occupation:'Developer'
};
for(let key in person){
    console.log(key+':' +person[key])
}
//The for of loop=>Used to iterate over iterable objects eg arrays, strings or collections
//Example
const fruits=['apple','banana','orange'];
for (let fruit of fruits){
    console.log(fruit);
}
//DESTRUCTURING AN Object
const person ={name:'Dawud',age:30}
const{name,age}=person
console.log(name,age);*/
//Promises example
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        //Simulating an asychronous operation
        setTimeout(()=>{
            const date='Some data';
            if(data){
                resolve(data)//Resolve the promise with the data
            }
        },2000)
    });
};

//using the promise
fetchData()
.then((data)=>{
    console.log('Data:',data);
})
.catch((error)=>{
    console.log('Error:',error)
});