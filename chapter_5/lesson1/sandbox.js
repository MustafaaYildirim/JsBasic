//object literals

let user = {
    name: 'mustafa',
    age: 28,
    email: 'myildirim3710@gmail.com',
    location: 'denizli',
    blogs: ['xdasddfsfd', 'asdsdfdsfgdfgd']
};
console.log(user);
console.log(user.name);
console.log(user['email']);

user['name'] = 'mustaaaaa';
console.log(user['name']);

console.log(typeof user);