let  anothar_id=Symbol("123");
console.log(anothar_id);
let id =123;
console.log(id===anothar_id);
//aray 
const a=[1,2,3,4,5];
console.log(a);

const myobj={
    fname:"Ganesh",
    age:24,
    email:  "ganesh@example.com"
}
console.log(myobj.fname);
console.log(myobj.age);
console.log(myobj.email);
//function
function call(){
    console.log("Hey Ganesh");
}
call();

function sum(a,b){
    return a+b;
}
let b=sum(5,10);
console.log(b);
let ab=function(){
    console.log("This is an anonymous function");
}
ab();



