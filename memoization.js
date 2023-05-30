'use strict';
//memoization/memoisation=>optimization done to reduce number of redudant expensive function calls
//how it is done=> by caching the return value of a function based on its return value

//memoizer
const memoize=func=>{
    //create a cache for results
    const results={}
    return (...args)=>{
//create a key foor our cache
const argsKey=JSON.stringify(args);
//only execute function if no cached val
if(!results[argsKey]){
    results[argsKey]=func(...args);
}
return results[argsKey]
    };
};





//expensive function to memoize
const inEfficientSquare=memoize(num=>{
    let total=0;
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            total++;
        }
    }
    return total;
});
const start=new Date()
inEfficientSquare(40000)
console.log(new Date()-start)

const start2=new Date()
inEfficientSquare(40000)
console.log(new Date()-start2);
//The first call takes 1209 seconds and second call 1230 seconds 
//but after memoization the first call takes 1209 seconds and second call 0 seconds since it is stored in a cache memory hence takes no time in calling it
