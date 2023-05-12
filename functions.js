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
createBooking('LH123', undefined,1000)*/

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

