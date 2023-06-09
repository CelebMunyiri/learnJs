'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays=['mon','tues','weno','thur','fri','sato','sun']
const hours={
    [weekdays[3]]: {
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
  }
  
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(starterIndex, mainIndex){
    return(this.starterMenu[starterIndex],this.mainMenu[mainIndex])
  },
  //Enhanced object literals
  hours,
  
  orderDelivery:function({starterIndex=1,mainIndex=0,time='20:00',address='Elburgon'}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverrd to ${address} at ${time}`);
  },
  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your favorite pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },
  orderPizza(mainIngredient,...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
};
//CODING CHALLENGE
const gameEvents=new Map(
  [
    [17,'goal'],
    [36,'substitution'],
    [47,'goal'],
    [61,'substitution'],
    [64,'yellowcard'],
    [69,'redcard'],
    [70,'substitution'],
    [72,'substitution'],
    [76,'goal'],
    [80,'goal'],
    [92,'yellowcard']
  ]
); 
//THE CHALLENGE RESPONSE STARTS HERE
//solution q1
//console.log(gameEvents.values())
const events=[...new Set(gameEvents.values())];
console.log(events)

//Q2
gameEvents.delete(64)
//console.log(gameEvents)
//Q3
const time=[...gameEvents.keys()].pop();
console.log(time)


console.log(`
An event happened, on average,every ${time/gameEvents.size} minutes
`)

//LOOPING THROUGH THE MAP
for(const [min,event] of gameEvents){
  const half=min<=45 ? `first`:`second`
  console.log(`[${half} HAlf] ${min}:${event} `)
}





/*
//MAPS ITERATION
const question=new Map([
  ['question','What is the best programming language in the world'],
[1,'C'],
[2,'Java'],
[3,'Javascript'],
['correct',3],
[false,'Try again'],
])
//Quiz app
console.log(question.get('question'));

for(const [key,value] of question){
  if(typeof key==='number') console.log(`Answer ${key} : ${value}`)
}
const answer=Number(prompt('Your answer'))
console.log(answer)
console.log(question.get(question.get('correct')===answer));

//convert map to array
console.log(...question)
//choosing kind of datasftrucures btn array,set,object,maps
//sources o data 
//1 source code
//2 user interface as input or dom value
//3 external sources or web api
//getting data from web API
//data comes inform of JSON
//key value pairs for objects nad maps
//there are weak objects/arrays and weak maps
//ARRAY VS SETS FOR SIMPLE VALUE OF SETS
//ARRAYS WHEN YOU WANT TO MANIPULATE VALUES
//SETS WHEN YOU ARE USING UNIQUE VALUES
//SETS ARE FAST
//MAPS ARE GOOD FOR SIMPLE KEY VALUE STORAGE
//MAPS ARE EASY TO ITEREATE
//IT IS EASY TO ACCESS ELEMENTS IN OBJECTS
//MAPS WHEN YOU WANT KEYS THAT ARE NOT STRINGS
//JSON DATA REQUIRE OBJECTS UNLESS YOU WANT CONVERTING THEM TO MAPS
//console.log(Object.entries(hours))
//const hoursMap=new Map(Object.entries(hours))
//console.log(hoursMap)
//console.log(question.get('question'))
//for(const [key,value] of question){
 // if(typeof key=='number') console.log(`Answer ${key}: ${value}`)
//}
//const answer=Number(propmt('Your answer'))
// console.log(answer)
 //console.log(Object.entries(hours))
//const hoursMap=new Map(Object.entries(hours))
//console.log(hoursMap)


//MAPS
const rest=new Map();
rest.set('name',"classico Italiano");
rest.set(1,'Firenze','Italy')
console.log(rest.set(2,'Lisbon','Portugal'))
rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open')
.set(false,'We are closed')
console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest)

const time=21;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')))
console.log(rest.has('categories'));

const arr=[1,2]
rest.set(arr,'Test')
console.log(rest.get(arr))
//console.log(rest.size)




//SETS

const orderSet= new Set(['Pasta','Pizza','Risotto','Pasta'])
console.log(orderSet);

console.log(new Set('Dawud'))
console.log(orderSet.size)
console.log(orderSet.has('Bread'))
orderSet.add('Garlic Bread');
console.log(orderSet)
orderSet.delete('Pizza');
console.log(orderSet)
for(const order of orderSet)console.log(order)

const staff=['Waiter','Chef','Waiter','Manager','Chef','Manager']
const staffUnique=[...new Set(staff)]
console.log(staffUnique)


//LOOPING OBJECTS
const properties=Object.keys(hours)
//console.log(properties)
let openStr=`We are open on ${properties.length} days:`
for(const day of properties){
   openStr+=`${day},`
}
console.log(openStr)

//PROPERTY VALUES
const values= Object.values(hours)
console.log(values)

//entry object
const entries=Object.entries(hours)
console.log(entries)

for(const [key,{open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}
//OPTIONAL CHAINING


//if(restaurant.hours && restaurant.hours.fri)
//console.log(restaurant.hours.fri.open);
//console.log(restaurant.hours.mon?.open)
//console.log(restaurant.hours?.mon?.open)
const days=['mon','tue','wed','thur','fri','sat','sun']
for(const day of days){
  const open=restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}

console.log(restaurant.order?.(0,1)?? 'Method does not exist')
//let users=[{name:'Abdul',email:'hello@gmail'}]
let users=[]

console.log(users[0]?.name ?? 'User array empty');

//ENHANCED OBJECT LITERALS
console.log(restaurant.openingHours)
console.log(restaurant.orderPizza())
//compute


//THE FOR OF LOOP
const menu=[...restaurant.starterMenu,...restaurant.mainMenu]
//for (const item of menu)console.log(item)
//item element is always the current element in the code block

//getting current index
for (const [i,el] of menu.entries()){
  console.log(`${i+1}:${el}`)

}


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




