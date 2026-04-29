//we can declared the two type of object sigalton and objecgt literal
//object literal
let users={
    name:"sarthak",
    age:20,
    email:"sarthakpatil4455@gmail.com",
    city:"sangli",
    islogin:true,
    lastlogin_day:["monday","tuesday"],
    "Full_name":"sarthak patil"
}
console.log(users);
console.log(users.email);
console.log(users.lastlogin_day);
console.log(users["Full_name"]);
//change the email
users.email="ganesh@9834@gmail.com"
console.log(users);

//Object.freeze(users)
users.email="sarthak@gmail.com"
console.log(users);
//simbole eample
const mysqal=Symbol("js");
const myobj = {
    [mysqal]: "js_sarthak"
};

console.log(myobj);
console.log(typeof myobj);

users.gratintyn=function(){
    console.log("Hello .js");
    
    console.log("happy birthday:"+ this.name);
}
console.log(users.gratintyn());

users.gratintyn2=function(){
    console.log(`email ${this.email}  name ${this.name} `);
}
console.log(users.gratintyn2());
