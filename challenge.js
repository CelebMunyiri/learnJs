"use strict";
const mine={student1:{nam:'david',age:21},student2:{nam:'abu',age:20}}

const keyss=Object.keys(mine)
console.log(keyss)
for(const x of keyss){
    console.log(x)
}
const value=Object.values(mine)
console.log(value)

const entries=Object.entries(mine)
console.log(entries)

for(const [keys,{nam,age}] of entries){
console.log(` Our names are ${nam} and our ages are ${age}`)
}