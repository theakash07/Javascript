// Initialize the variable 'sum' to store the sum of numbers.
let sum = 0;

// Prompt the user to enter a value for 'n'.
let n = prompt('Enter value of n');

// Use a 'for' loop to iterate from 1 to 'n' and calculate the sum.
for (let i = 0; i < n; i++) {
    sum += (i + 1); // Add the current number (i+1) to the sum.
}

// Display the result using 'console.log'.
console.log("The sum of " + n + " digits is " + sum);
