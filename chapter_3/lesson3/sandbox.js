//if statements
const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const names = ['mustafa', 'musti', 'mustaa', 'mıstık'];

if(names.length > 3){
    console.log("that's a lot of names");
}

//else statements

const password = 'p@ss';

if(password.length >= 8){
    console.log('that password is long enough');
}
else{
    console.log('that password is not long enogh');
}

// else if statements

const pasword = 'p@ssword1234';
if(pasword.length >= 12){
    console.log('that password is strong');
}else if(pasword.length >= 8){
    console.log('that password is long enough');
}
else{
    console.log('that password is not long enogh');
}