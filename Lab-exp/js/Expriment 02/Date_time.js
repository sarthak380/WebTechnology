const { use } = require("react");

let mydate=new Date();
console.log("Current Date and Time is:", mydate.toString());
console.log("Current Date is:", mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log("Current Time is:", mydate.toTimeString());
console.log(mydate.getType());
//tystam whan we use
let my_time_stam=Date.now();
console.log(my_time_stam);
//how to calculate 

console.log(mydate.getDay());//0 to 6
console.log(mydate.getDate());  
console.log(mydate.getMonth());//0 to 11