const users=new Object();//object sigalton
console.log(users);
const user2={};//object sigalton
user2.id=102
user2.name="sarthak patil"
user2.email="sarthak@gmail.com"
user2.age=20
user2.city="sangli"
user2.islogin=true
console.log(user2);
//non sigleton object
const regural_useer={
    email:"sarthak@gmail.com",
    user1:{
        name:"sarthak",
        age:20
    }
};
console.log(regural_useer);
console.log(regural_useer.user1.name);