//object literals

let user = {
    name: 'mustafa',
    age: 28,
    email: 'myildirim3710@gmail.com',
    location: 'denizli',
    blogs: ['Özetle, yaşamak bir denge meselesidir', 'Birine aşırı bağlanmak dengesizliktir'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};
user.login();
user.logout();
user.logBlogs();