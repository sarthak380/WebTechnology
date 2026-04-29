let arr = [1, 2, 4, 5, 6];

for (let i = 1; i <= arr.length + 1; i++) {
    if (!arr.includes(i)) {
        console.log("Missing number is:", i);
        break;
    }
}
