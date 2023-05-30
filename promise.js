'use strict';
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        //Simulating an asychronous operation
        setTimeout(()=>{
            const data='Some data';
            if(data){
                resolve(data)//Resolve the promise with the data
            }
        },2000)
    });
};

//using the promise
fetchData()
.then((data)=>{
    console.log('Data:',data);
})
.catch((error)=>{
    console.log('Error:',error)
});