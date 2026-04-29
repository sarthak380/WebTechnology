const add=(a,b)=>a+b;
const multiply=(a,b)=>a*b;

const resultAdd=multiply(add(2,3),4);
console.log(resultAdd);

//2
const student={
    name:"sarthak",
    greet :function(){
        const sayHEllo=()=>{
         console.log("hello "+this.name);
        }
        sayHEllo();
    }

};
console.log(student.name);