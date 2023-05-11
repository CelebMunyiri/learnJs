'use strict'
//Strings challenge
//document.body.append(document.createElement('textarea'));
//const text=document.querySelector('textarea').value
//console.log('AbdullahRaheem Munyiri')
/*
const changeToCamelCase=function(wor){
    word.toLowerCase();
const [word1,word2]=word.split('_');
word2=word2.replace(word2[0],word2[0].toUpperCase())


}
//changeToCamelCase('underscore_case');
//let word='underscore_case'
//const led=word.split('_');
//console.log(led)
const word='underscore_case'
word.toLowerCase();
let [word1,word2]=word.split('_');
console.log(word1,word2)
word2=word2.replace(word2[0],word2[0].toUpperCase());
//word2.slice(1)+word2[0].toUpperCase();
console.log(word2)
let wordy=`${word1} ${word2}`
wordy=wordy+'';

console.log(wordy.slice(indexOf(' ')));
    underscore_case                
    first_name
    some_Variable
    calculate_Age
    delayed_departure
    daudMunyiri
*/
document.body.append(document.createElement('textarea'));
//const text=document.querySelector('textarea').value
document.querySelector('.button').addEventListener('click',function(){
    const text=document.querySelector('textarea').value;
    const rows=text.split('\n');
    //console.log('heyyy')
    console.log(rows)
    for(const [i,row] of rows.entries()){
        const[first,second]=row.toLowerCase().trim().split('_');
        //console.log(first,second)
        const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
console.log(`${output.padEnd(20)}${'&'.repeat(i+1)}`)
    }
})
//solution worked perfectly as expected
