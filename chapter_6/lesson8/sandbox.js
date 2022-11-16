/*const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('you clicked me');
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
       // console.log('item cliked');
       console.log(e);
       console.log(e.target);
       //console.log(item);
       e.target.style.textDecoration = 'line-through';
    });
});*/
const ul = document.querySelector('ul');
//ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
//ul.innerHTML += '<li>something new</li>';
const li = document.createElement('li');
li.textContent = 'something new to do';
//ul.append(li);
ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
       
       //e.target.style.textDecoration = 'line-through';
       e.target.remove();

    });
});