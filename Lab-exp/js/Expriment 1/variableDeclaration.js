// declaration of a variable using var, let, and const
var cba = "I am a global variable";
let abc = "I am a block-scoped variable";
const cons = "I am a constant variable";

//displaying the variables
console.log(cba);
console.log(abc);
console.log(cons);


//block scope with let
if (true) {
    let blockScopedVar = "for this block";
    console.log(blockScopedVar); // This will work
}   
// function scope with var
function testVar() {
    var functionScopedVar = "Only for this scope";
    console.log(functionScopedVar); // This will work
}
testVar();


 
//different data types and log their types
let numVar = 42;
let strVar = "Hello, World!";
let boolVar = true;
let objVar = { name: "Suyog", age: 25 };
let arrVar = [1, 2, 3, 4, 5];
let nullVar = null;
let undefVar;   
console.log(typeof numVar);    // number
console.log(typeof strVar);    // string
console.log(typeof boolVar);   // boolean
console.log(typeof objVar);   // object
console.log(typeof arrVar);   // object
console.log(typeof nullVar);   // object
console.log(typeof undefVar);  // undefined
