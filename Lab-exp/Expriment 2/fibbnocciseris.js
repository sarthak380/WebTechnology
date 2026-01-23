let n = 10;   
let a = 0, b = 1;
for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}
