let score="22";
let scoreforbool=true;
let scorefornull=null;
let scoreforundef=undefined;

// if in string there is number it will convert but there is not number in str then it will return NaN

let s="07"; 
let convert=Number(s);
let convert2=String(convert);

let ss="msd";
let sconverts=Number(ss);
let sconverts2=String(sconverts);






console.log(typeof score); 
console.log(typeof scoreforbool); 
console.log(typeof scorefornull); 
console.log(typeof scoreforundef); 
console.log(typeof sconverts);
console.log(typeof convert);
console.log(typeof sconverts2);

//Activity no 1 , try to convert different data types using Number(), String(), Boolean() functions and check their types using typeof operator.

// Arithmetic operations 
 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2/2);
 console.log(5%2); 

//
let str="Hello";
let str2=" Suyog";
console.log(str+str2);

// jAva script only automatiacally converts str to num in arith operations 
//conversions 
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);


