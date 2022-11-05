// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mustafa', 'musti', 'mustaa', 'musto', 'mıstık'];

let html = ``;

people.forEach(person =>{
    //create html template
    html += `<li style="color: red">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;