"use strict"
const game={
    team1:'Bayern Munich',
    team2:'Borrussia Dortmund',
    players:[
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
         'Gnarby',
         'Lewandowski'
    ],[
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze'
    ]],
    score:'4:0',
    scored:['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date:'Nov 9th 2037',
    odds:{team1:1.33,x:3.25,team2:6.5},
     
};
for(const [i,player] of game.scored.entries()){
console.log(`Goal ${i+1}: ${player}`);

}
// calculate average odds
const odds=Object.values(game.odds)
let average=0;
for(const odds of Object.values(game.odds))
    average+=odds
    average/=odds.length
    console.log(average)

    for(const [team,odd] of Object.entries(game.odds)){
        const teamStr=team== 'x' ? 'draw' :`${game[team]}`
console.log(`Odds of ${teamStr} ${odd}`)
    }
    //create object scorersvwith anme of scorer and number of scorer
    for(const [,player] of Object.entries(game.scored)) {
       let goal=player===player ? 1 :0 
       goal=goal+goal
       console.log(goal)
        
console.log(`${player} : `)
    }

 //looping over the game scored array to print each player name together with goal
/*
 const scoredBy=Object.entries(game.scored)
console.log(scoredBy)
for(const [goal,player] of scoredBy){
    console.log(`${goal}: by ${player}`)
}

const totalOdds=Object.values(game.odds)
console.log(totalOdds)
let sum=0
for(let odd of totalOdds){
    sum=sum+odd
    console.log(sum)
    let averageOdds=sum/3
    console.log(averageOdds)
    

}

const printOdd=Object.entries(game.odds)
console.log(printOdd)
for(const [team,odi] of printOdd){
    console.log(`Odds of ${team==='team1' && 'Victory' || 'draw' || 'Victory'}  ${odi==='1.33' || 'Bayern Munich' || 'Borrusia'} ${odi}`)
}
//above mot fully solved

const gameNames=Object.values(game)
console.log(gameNames)
for(const [[tim],[timu]] of gameNames){
console.log(tim,timu)
}*/