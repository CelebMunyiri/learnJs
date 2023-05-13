'use strict';
//default parameters
/*
const bookings=[];
const createBooking=function(flightNum,numPassengers=1,price=199*numPassengers){
   //es5 numPassengers=numPassengers || 1;
    //es5 price =price || 199;

    const booking={
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking)
    bookings.push(booking)
};
createBooking('LH123');
//the results of the booking object displays the values
createBooking('Lh123',2,800);
createBooking('LH123',2)
createBooking('Lh123',5)
createBooking('LH123', undefined,1000)

//PASSING ARGUMENTS INTO FUNCTIONS
const flight='lh234'
const dawud={
    name:'Abdul Munyiri',
    passport:24739479284,
}
const checkInn=function(flightNum,passenger){
flightNum='lh999'
passenger.name='Mr.' +passenger.name
if(passenger.passport===24739479284){
    alert('checkinn kindly')
}
else{
    alert('wrong Passport')
}
}
checkInn(flight,dawud)
console.log(flight)
console.log(dawud)

//is the same as doing..
const flightNum=flight;
const passenger=dawud;

const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*100000000)
}
newPassport(dawud);
checkInn(flight,dawud);

//first class and higher order functions
//enables us to write higher order functions
//functions are simply treated as values
//function are another type of objects
//higher order functions are functions that receive other functions as arguments or return other dunctions

const add=(a,b)=>a+b;
add(2,3);

function mine(){this.value++}
const greet=()=>console.log('Hey Dawud');
greet();
//btnClose.addEvetListener('click',greet);
//example of function that accepts other function as input
const oneWord=function(str){
    return str.replace(/ /g,'').toLowerCase();
}
const upperFirstWord=function(str){
    const [first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};
const transfomer=function(str,fn){
    console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn(str)}`);
console.log(`Transformed by: ${fn.name}`);
}
transfomer('Javascript is the best',upperFirstWord)
transfomer(`Javascript is the best`,oneWord);

const high5=function(){
    console.log('hi');
}
document.body.addEventListener('click',high5);
['Mahu','Abdul','Dawudi'].forEach(high5);
//Callback functions allow us to create abstraction
//abstraction is when we hide implemtation details of a piece of code


//FUNCTIONS RETURNING FUNCTIONS*/
const greet=(greeting)=>{
    return (name)=>{
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey=greet('Hey');
greeterHey('Davis');
greeterHey('Nduguu');

const cheki=(infor)=>{
    return (item)=>{
        console.log(`${infor} ${item}`)
    }

}
const nunua=cheki(`Buy`);
nunua(`mandazi`);
cheki('shikisha')('Mandunya');
