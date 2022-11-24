const scores = [10, 30, 15, 25, 50, 40, 5];

/*scores.filter((score) => {
    return score > 20;
});*/

/*const filteredScore = scores.filter((score) => {
    return score > 20;
});

console.log(filteredScore);*/

const users = [
    {name: 'mustafa', premium: true},
    {name: 'mustaaa', premium: false},
    {name: 'musti', premium: false},
    {name: 'mıstık', premium: true},
];

const premiumUsers = users.filter(user => user.premium
);

console.log(premiumUsers);