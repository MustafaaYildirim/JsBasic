//arguments & paramaters

const speak = function(name = 'mustafa', time = 'night'){
    console.log(`good ${time} ${name}`);
};
speak();
speak('musti', 'morning');
speak('musti');
