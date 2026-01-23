let ab="sarthak";
let vowels_count=0;
for(let i=0;i<ab.length;i++){
    let ch=ab.charAt(i);
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        vowels_count++;
    }
}
console.log(vowels_count);