
let arr = [1, 2, 3, 4, 5];
let sum = 0;
function sumOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log("Sum of array elements:", sumOfArray(arr));