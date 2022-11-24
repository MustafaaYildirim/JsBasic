//reduce method
//const scores = [10, 20, 60, 40, 70, 90, 30];

/*const result = scores.reduce((acc, curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0);

console.log(result);*/

const scores = [
    {player: 'mustafa', score: 50},
    {player: 'musti', score: 30},
    {player: 'mustafa', score: 70},
    {player: 'mıstık', score: 60},
    {player: 'mustafa', score: 60},
    {player: 'musti', score: 30},
    {player: 'mustafa', score: 90},
    {player: 'mıstık', score: 60},
    {player: 'mustafa', score: 50},
    {player: 'musti', score: 30},
    {player: 'mustafa', score: 20},
    {player: 'mıstık', score: 60},
];

const mustafaTotal = scores.reduce((acc, curr) => {
    if(curr.player === 'mustafa'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(mustafaTotal);