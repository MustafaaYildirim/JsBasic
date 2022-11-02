// break and continue

const scores = [ 50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }

    console.log('your score:', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score');
        break;
    }
}

// switch statements
const grade = 'C';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');                     
}





//using if statements
//if(grade === 'A'){
    
//} else if(grade === 'B'){

//} else if(grade === 'C'){
    
//} else if(grade === 'D'){
    
//} else if(grade === 'E'){
    
//} else{

//}