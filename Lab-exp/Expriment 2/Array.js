let arry=[1,2,3,4,5,67,9];
let max=0;
for(let i=0;i<arry.length;i++){
    if(arry[i]>max){
        max=arry[i];
    }
}
console.log(max);

//2
let arry12=[1,1,2,3,3,4,5,6,66,5];
let s = set(arry12);
console.log(s);



//3
let arry1=[1,2,4,5,6,7,9];
let a=1;
for(let i=0;i<arry1.length;i++){
    if(arry1[i]==a){
        a++;
    }
    else{
        break;
    }
}
console.log(a);
