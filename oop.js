'use strict';
//Javascript object oriented programming
//before object oriented programming, we used procedural programming
//Object oriented programming is concerned on four things namely
//Abstraction
//Inheritance 
//Polymorphism
//Encapsulation
//oop solves spagheti code where there is too much depedency within functions in a code
//example of oop
/*
//way 1. procedural
let baseSalary=30000
let overtime=10
let rate=20


function getWage(baseSalary,overtime,rate){
    return baseSalary+(rate*overtime)
}

//Take away point from uncle bob, best functions are those with no parameters
//way 2.OOP method
//Encapsulation
let employee={
    baseSalary:30000,
    overtime:10,
    rate:20,
    getWage(){
        return this.baseSalary+(this.overtime*this.rate)
    }
};
console.log(employee.getWage())
//Abstraction
//hiding implementation details of methods
//advantage is simple interface
//Reduce the impact of change


//Inheritance helps eliminate redudant code

//Polymorphism=> eliminate many if else, helps use render method

//Traversy media content on javascript object oriented programming
//syntactic sugar ,it uses es5 syntax and prototypes
const s1='Hello'
console.log(typeof s1)
console.log(s1.toLocaleUpperCase())
const s2=new String('Hello')
console.log(typeof s2)
//console.log(window)
//Constructor

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    

}
//Instantiate object
//const book1=new Book('Book one','John Doe','2013');
//const book2=new Book('Book2','Jane Dore','2016');
//console.log(book1);
//console.log(book2);

const book1={
    title:'Book One',
    author:'John Dore',
    year:'2019',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },

}
const book2={
    title:'Book Two',
    author:'Jane Doe',
    year:'2016',
    getSummary:function(){
        return  `${this.title} was written by ${this.author} in ${this.year}`
    },
}
console.log(book1)
//FEATURES OF OOP IN JAVASCRIPT
//FEATURE 1 OBJECTS AND CLASSES
//object literal
const person={
    name:'Dawud',
    age:22,
    greet:function(){
        console.log(`Hello, my name is ${this.name}`)
    }

}
person.greet();
//Class
class Person{
constructor(name,age){
    this.name=name;
    this.age=age;
}
greett(){
    console.log(`Hello my name is ${this.name} aged ${this.age}`)
}
}

const persona=new Person('Mahubali',30)
persona.greett();

//FEATURE 2 ENCAPSULATION
class BankAccount{
    constructor(accountNumber){
        this._accountNumber=accountNumber;//private property
        this._balance=0;//private property
    }
    deposit(amount){
        this._balance+=amount;
    }
    withdraw(amount){
        if(amount<=this._balance){
            this._balance-=amount;
        }else{
            console.log(`Insufficient fund, ${this._balance}`)
        }

    }
    getBalance(){
        return this._balance
    }
}
const account=new BankAccount('123456789');
account.deposit(1000);
console.log(account.getBalance());//output:1000
account.withdraw(500);
console.log(account.getBalance())//output:500

//FEATURE 3 INHERITANCE
class Animal{
    constructor(name){
        this.name=name;

    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal{
    bark(){
        console.log(`Woof!`)
    }
}
const dog=new Dog('Buddy');
dog.eat();//output buddy is eating
dog.bark();//output woof! 

//FEATURE 4 POLYMORPHISM
class Shape{
    calculateArea(){
        console.log(`Calculating area of a shape`)
    }
}

class Rectangle extends Shape{
    calculateArea(){
        console.log(`Calculating area of a rectange`)
    }
}

class Circle extends Shape{
    calculateArea(){
        console.log(`Calculating area of a circle`)
    }
}
const shape1=new Rectangle();
const shape2=new Circle();

shape1.calculateArea(); // output calculating area of a rectangle
shape2.calculateArea()//output calculating area of a circle 
*/

