// largest number in  array
let arr = [3, 5, 7, 2, 8, -1, 4];
let largestNum = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    }
}
console.log("largest number :", largestNum);
