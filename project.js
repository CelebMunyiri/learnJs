"use strict";

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
const [players1,players2]=game.players
console.log(players1,players2);
//const gk=players1[0]
//console.log(gk);
const [gk, ...fieldPlayers]=players1
console.log(gk,fieldPlayers)

const allPlayers=[...game.players[0],...game.players[1]]
console.log(allPlayers)

const playersFinal=['Thiago','Coutinho','Perisic',...players1]
console.log(playersFinal)

const team1=game.odds.team1;
const draw=game.odds.x;
const team2=game.odds.team2;

console.log(team1,team2,draw)

function printGoals(...input){
console.log(input, `Total goals scored are ${input.length}`)
}
printGoals('Muller','Neuer','Lewandowski');

//Team more likely to win || team with lowest odds
team1<team2 &&  console.log('Team1 is more likely to win')