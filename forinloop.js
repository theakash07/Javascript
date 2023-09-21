// Define an object 'obj' with key-value pairs representing student names and their marks.
let obj = {
    akash: 23,
    sky: 45,
    praneeta: 78,
    metahu: 90,
    homal: 77
};

// Use a 'for...in' loop to iterate through the keys (student names) in the 'obj' object.
for (let a in obj) {
    // Print the key (student name) and their corresponding marks.
    console.log("The key: " + a + " and their marks are: " + obj[a]);
}
