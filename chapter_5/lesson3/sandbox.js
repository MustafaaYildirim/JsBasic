//object literals

/*const blogs = [
    { tittle: 'Özetle, yaşamak bir denge meselesidir', likes: 30},
    { tittle: 'Birine aşırı bağlanmak dengesizliktir', likes: 50}
    
];*/

let user = {
    name: 'mustafa',
    age: 28,
    email: 'myildirim3710@gmail.com',
    location: 'denizli',
    blogs: [
        { tittle: 'Özetle, yaşamak bir denge meselesidir', likes: 30},
        { tittle: 'Birine aşırı bağlanmak dengesizliktir', likes: 50}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.tittle, blog.likes);
        });
    }
};
user.login();
user.logout();
user.logBlogs();