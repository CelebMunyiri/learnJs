'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(starterIndex, mainIndex){
    return(this.starterMenu[starterIndex],this.mainMenu[mainIndex])
  },
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery:function({starterIndex=1,mainIndex=0,time='20:00',address='Elburgon'}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverrd to ${address} at ${time}`);
  },
  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your favorite pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },
  orderPizza:function(mainIngredient,...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
};
//THE FOR OFF LOOP
const menu=[...restaurant.starterMenu,...restaurant.mainMenu]
for (const item of menu)console.log(item)
/*
//NULLISH COALESCING OPERATOR
//nullish coalescing works with nullish values instead of falsy 
//null and undefined 
restaurant.numGuests=0
const guests=restaurant.numGuests || 10
console.log(guests)

const guestCorrect=restaurant.numGuests ?? 10;
console.log(guestCorrect)
 

//SHORT CIRCUITING (&&) and OR (||)
//logical operators can use any data type and can return any data type

//OR SHORT CIRCUITING
console.log(3 || 'Munyiri')
//short circuiting means if the firstvalue is truthy then it return the first value
console.log('' || 'David')
console.log(true || 0)
console.log(undefined || null)
console.log(undefined || 0|| ''|| 'Hello' || 23|| null)

const guests1 =restaurant.numGuests ? restaurant.numGuests :10

console.log(guests1)
const guests2=restaurant.numGuests || 20
console.log(guests2)

console.log("--AND--&&")// works opposite of OR ,executes when first value is falsy
console.log(0 && 'Mahubali')

console.log(7 && 'Mahuba')
console.log('Hello'  && 23 && null && 'Abdulraheem')
 if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach')
 }
 restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach')


restaurant.orderPizza('mushrooms','onion','olives','spinach')
//REST PATTERN AND PARAMETER
//use in array

const arr=[2,3,...[4,5]]//spread becuase its on the right hand side
console.log(arr)
const [a,b,...others]=[1,2,3,4,5]//Rest because its on the left hand side
console.log(a,b,others)

const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(otherFood);
restaurant.orderPizza('Mushrooms');
//Use in objects
const {sat,...weekdays}=restaurant.openingHours;
console.log(weekdays)
//example function
const add=function (...numbers){
let sum=0
for(let i=0;i<numbers.length;i++) sum+=numbers[i]
  console.log(sum)


}
add(2,3,4,5,6)
add(1,2,3,4)



//THE SPREAD OPERATOR

const newRestaurant={foundedIn: '1998',...restaurant,founder:'Munyiri'}
const ingredients=[prompt(`Let\'s make pasta! Ingredient1`),
prompt(`Ingredient2`),
prompt(`Ingredient3`),

];
console.log(ingredients)
restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])

restaurant.orderPasta(...ingredients)

const arr=[7,8,9]
const newBadArr=[2,3,...arr]
console.log(newBadArr)

const newMenu=[...restaurant.mainMenu,'Gnocci'];
console.log(newMenu)

//creating shallow copies of arrays and merging arrays
const mainMenuCopy=[...restaurant.mainMenu]

//join 2 arrays
const menu=[...newMenu,...mainMenuCopy]
console.log(menu)
const str='AbdulRaheem';
const letters=[...str,' ','S.']
console.log(letters)
console.log(...str)

//example


/*
restaurant.orderDelivery({time:'23:30',
address:"Warufaga",
mainIndex:2,
starterIndex:2,});


//OBJECT DESTRUCTURING
const {name,openingHours,categories}=restaurant
console.log(name ,openingHours,categories)

const {name:restauraneName,openingHours:hours,categories:tags}=restaurant
console.log(restauraneName,hours,tags)

const {menu=[],starterMenu:starters=[]}=restaurant
console.log(menu,starters)

//nested objects
const{ fri: { open, close } }=openingHours
console.log(open,close)

//Mutating variables

let a = 111;
let b = 999;
const obj = { a: 27, b: 29, c: 18 };
({ a, b } = obj);
console.log(a, b);*/

 
/*

//Array Destructuring
const arr=[2,3,4]
const [a,b,c]=arr
//console.log(a,b,c)//prints the three elements in separate
const [f1, ,f2]=restaurant.mainMenu;
//console.log(f1, f2)
//Switching variables
let [main, ,secondary]=restaurant.categories
//console.log(main, secondary)

//const temp=main
//main=secondary
//secondary=temp
//[main, secondary] = [secondary, main]
//console.log(main, secondary)

//const [starter,mainCourse] = restaurant.order(2,0);
//console.log(starter,mainCourse);
//Nested Array destructuring
const nested=[2,4,[5,6]]
const [,,[i,l]]=nested
console.log(i,l)
// Default Values
const [p=1,q=1,r=1]=[8,9]
console.log(p,q,r)*/




