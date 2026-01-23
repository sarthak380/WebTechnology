function evenodd(a){
    if(a%2==0){
        console.log("even number");
    }
    else{
        console.log("odd number");
    }
}
let a=10;
evenodd(a);

function arrycount(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let arr=[1,2,3,4,5];
let result=arrycount(arr);
console.log(result);