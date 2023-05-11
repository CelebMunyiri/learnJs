'use strict';
const airline='TAP Air Portugal'
//const plane='A320'
//console.log(plane[0])
//console.log(plane[1])
console.log(airline.length)//length
console.log(airline.indexOf('r'))//first r
console.log(airline.lastIndexOf('r'))//last r
//space counts as a character in strings
console.log(airline.indexOf('Portugal'))//this a substring
console.log(airline.indexOf('portugal'))//it is case sensitive hence rturn -1
//use of slice method in strings
console.log(airline.slice(4));
console.log(airline.slice(4,7))
console.log(airline.slice(5,7))//gives diffrence of last minus first

console.log(airline.slice(0,airline.indexOf(' ')+1))
console.log(airline.slice(-2))//starts from the end
console.log(airline.slice(1,-1))

const checkMiddleSeat=function(seat){
//B and E are Middle seat
const s=seat.slice(-1)
if (s==='B' || s==='E');{console.log('You got lucky')} 


};
checkMiddleSeat('118')
checkMiddleSeat('23C')
checkMiddleSeat('3e')
console.log(typeof new String('Munyiri').slice(1))
//use of string methods

console.log(airline.toLowerCase())//lower case
console.log(airline.toUpperCase())//upper case
//FIX CAPITALIZATION IN NAME
const passenger='muNyiri' //should be Munyiri
const passengerLower=passenger.toLowerCase()
const passenderCorrect=passenger[0].toUpperCase() +passengerLower.slice(1)
console.log(passenderCorrect)
//comparing email
const email='hello@munyiri.io'
const loginEmail='Hello@Munyiri.Io \n';

const lowerEmail=loginEmail.toLowerCase();
const trimmedEmail=loginEmail.trim()
//console.log(trimmedEmail)

const normalizedEmail=loginEmail.toLowerCase().trim();
console.log(normalizedEmail)
console.log(email===normalizedEmail)
//replacing
const priceGB='288,97K'
const priceUS=priceGB.replace('K','$').replace(',','.') //replace K with $ and , with .
console.log(priceUS)

const announcement='All passengers come to boarding door 23. Boarding door 23'

console.log(announcement.replaceAll('door','gate'));//replace and replaceAll work same

console.log(announcement.replace(/door/g,'gate'));//replace and replaceAll work same
//replace method is case sensitive
//Methods that return Booleans
const plane='Airbus A320neo'
console.log(plane.includes('A320'))//true
console.log(plane.includes('Boeing'))//false
console.log(plane.startsWith('Ai'))//true

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log("Part of the new Airbus family")
}
//Practise exercise
const checkBaggage=function(items){
const baggage=items.toLowerCase()
if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed to board')

}
else{
    console.log('Welcome aboard')
}
}
checkBaggage('I have a laptop, some Food and a pocket Knife')

checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection')

//split method and join methods 
console.log('a+very+nice+String'.split('+'))
console.log('David Munyiri'.split(' '));
const [firstName,lastName]='Abdul Mwangi'.split(' ')
console.log(firstName,lastName)
const newName=['Mr.',firstName,lastName.toUpperCase()].join(' ++==');
console.log(newName)

const capitalizeName=function(name){
const names=name.split(' ')
const namesUpper=[];
for(const n of names ){
    //namesUpper.push(n[0].toUpperCase()+n.slice(1))
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
}
console.log(namesUpper.join(' '))
}
const passencha='jessica ann smith davis'
capitalizeName('abdulRaheem munyiri')
capitalizeName(passencha)

//padding a string 
const message='Go to gate 23'
console.log(message.padStart(25,'+'))//adds + at the start until it has length of 25
console.log(message.padEnd(23,'='))// add= at the end until it has legth of 23

//funcrion for masking card details
const maskCreditCard=function(number){
    const str=number+'';
const last=str.slice(-4)
return last.padStart(str.length,"*")
}
console.log(maskCreditCard(43378463864647384))
console.log(maskCreditCard('5237624823694325'))

//REPEAT METHOD
//allows repeatinh=g same string multiple times
const message2='Bad weather... All Departures Delayed...  ';
console.log(message2.repeat(5))

const planesInline=function(n){
    console.log(`There are ${n} planes in line ${n}.repeat(n)`)
}
planesInline(5)
planesInline(3)
planesInline(2)