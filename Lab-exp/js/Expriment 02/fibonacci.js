//fibonacci series
let n = 10;
let a = 0, b = 1, nextNum;

for (let i = 1; i <= n; i++) {
    console.log(a);
    nextNum = a + b;
    a = b;
    b = nextNum;
}
