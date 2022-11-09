const para = document.querySelector('p');

console.log(para);
para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

paras.forEach(parra =>{
    console.log(parra.innerText);
    parra.innerText += ' new text';
});

const content = document.querySelector('.content');

/*console.log(content.innerHTML);
content.innerHTML = ' <h2>THIS IS A NEW H2</h2>';*/

const people = ['mustafa', 'mustaaa', 'musti'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});