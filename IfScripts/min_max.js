function findMinMax(a, b, c) {
    // Initialize lowest and biggest with the first number
    let lowest = a;
    let biggest = a;

    // Compare with the second number
    if (b < lowest) {
        lowest = b;
    }
    if (b > biggest) {
        biggest = b;
    }

    // Compare with the third number
    if (c < lowest) {
        lowest = c;
    }
    if (c > biggest) {
        biggest = c;
    }

    return { lowest, biggest };
}
console.log(findMinMax(5 , 3 , 7)); // min 3 max 7
console.log(findMinMax(1 , 3 , 4)); // min 1 max 4
console.log(findMinMax(4 , 5 , 2)); // min 2 max 4 
console.log(find(6 , 2 , 1)); // min 2  max 6