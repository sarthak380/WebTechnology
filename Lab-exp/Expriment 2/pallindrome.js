let a=12345;
let sum=0;
while(a>0){
    let avg=sum*10+a%10;
    sum=avg;
    a=Math.floor(a/10);     
}
if(sum===a){
    console.log("pallindrome");
}
else{
     console.log("not pallindrome");
}
