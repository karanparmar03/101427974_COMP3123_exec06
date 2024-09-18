console.log("Hello, Node.js");
// Exercise 1: Capitalize the first letter of each word
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log("Exercise 1:");
console.log(capitalizeFirstLetter("hello world! this is a test."));

// Exercise 2: Find the largest of three given integers
function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log("\nExercise 2:");
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// Exercise 3: Move last three characters to the start of a given string
function right(str) {
    if (str.length < 3) return str;
    const lastThree = str.slice(-3);
    const rest = str.slice(0, -3);
    return lastThree + rest;
}

console.log("\nExercise 3:");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// Exercise 4: Find the type of a given angle
function angle_Type(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Invalid angle";
}

console.log("\nExercise 4:");
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

// Exercise 5: Find the maximum possible sum of k consecutive numbers
function array_max_sum(arr, k) {
    let maxSum = 0;
    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

console.log("\nExercise 5:");
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
