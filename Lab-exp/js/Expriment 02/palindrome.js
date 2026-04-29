

let num = 121;
let revNum=0;
let orgNum=num;

while(num>0){
    let digit=num%10;
    revNum=revNum*10+digit;
    num=Math.floor(num/10);
}   
if(orgNum==revNum){
    console.log(orgNum,"is    palindrome number");
}