//callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc(value => {
    //do something
    console.log(value);
});

//forEach

/*let people = ['mustafa', 'musti', 'mustaa', 'mıstık', 'musto'];

people.forEach((person, index) => {
    console.log(index, person);
});*/

// different version
let people = ['mustafa', 'musti', 'mustaa', 'mıstık', 'musto'];

    const logPerson = (person, index) =>{
        console.log(`${index} - hello ${person}`);
    }

people.forEach(logPerson);