'use strict';
//This file shows how to create protypes and implement them in objects created from constructor

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

//getSummary //below is an example of prototype
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
};

//getAge
Book.prototype.getAge=function(){
    const years=new Date().getFullYear()-this.year;
    return `${this.title} is ${years} years old`
}

//revise/ Change Year
Book.prototype.revise=function(newYear){
    this.year=newYear;
    this.revised=true;
}

const book1=new Book('kitabu','munyiri','2000');
const book2=new Book('The book','Madias','2001');
//console.log(book1);
//console.log(book2.getAge())
console.log(book2)
book2.revise('2018')
console.log(book2)



/*
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
console.log(book1)*/