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


//FUNCTIONS RETURNING FUNCTIONS
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
cheki('shikisha')('Mandunya');*/
const lufthansa={
    name:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.name} flight ${this.iataCode} ${flightNum}`)
    this.bookings.push({flight:`${this.iataCode} ${flightNum}`,name});
    },

};
lufthansa.book(239,'Dawud Munyiri');
lufthansa.book(635,'Abdul Mwangi');

const euroWings={
    name:'EuroWings',
    iataCode:'EW',
    bookings:[],

};
const book=lufthansa.book;
//call method
//book(23,'Bro ndegwa');//does not work
book.call(euroWings,23,'Samson ndegwa');
book.call(lufthansa,34,'Joy kemunto');


const swiss={
    name:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[],
}
book.call(swiss,37,'Lewis James');

console.log(swiss);

//apply method
const flightData=[583,'John Wlliams']
book.apply(swiss,flightData)
console.log(swiss)
book.call(swiss,...flightData);

//THE BIND METHOD
//does not immediately call the function but returns a function wth the value we called

//book.call(euroWings,23,'Mahubali the great');
const bookEw=book.bind(euroWings);
const bookLh=book.bind(lufthansa);
const bookKLX=book.bind(swiss);

bookEw(23,'Mahubali the great');
bookKLX(31,'Abdulraheem')
bookLh(76,'Nduguu yangu');

const bookEW23=book.bind(euroWings,23,'Muhia')//partial application

//bookEW23('Munyiri Mwangi');
//bookEW23('Jecinta');
//bookEW23('munyambu');
bookEW23();//already have values given

//WITH EVENT LISTENERS
lufthansa.planes=300;
lufthansa.buyPlane=function(){
    console.log(this);
    this.planes++;
    console.log(this.planes)
}
//lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

//Partial application
const addTax=(rate,value)=>
    value+value*rate;
console.log(addTax(0.1,200))

const addVAT=addTax.bind(null,0.23);
//addVAT=value=>value+value*0.23

console.log(addVAT(100));
console.log(addVAT(300));

//using the grid function
const addTaxRate=function(rate){
    return function(value){
        return value+value*rate
    }
}

const men=addTaxRate(0.23)(100);//setting both values as default
//const addVat=addTaxRate(0.23);//setting one value as default here
//console.log(addVat(100))//calling method with one default value
//console.log(addVat(23));//has a default value for rate
console.log(men);//calling function with both values set as default
