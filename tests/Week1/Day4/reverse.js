// let str = "hello";
// let reversed = str.split("").reverse().join("");

// // Step 1: split("")
// str.split("")
// // 👉 Converts the string into an array of characters
// // Before
// // "hello"
// // After
//// ["h", "e", "l", "l", "o"]

// // 🔹 Step 2: reverse()
// ["h", "e", "l", "l", "o"].reverse()
// // 👉 Reverses the array order
// // Before
// // ["h", "e", "l", "l", "o"]
// // After
// // ["o", "l", "l", "e", "h"]
// // 📌 reverse() works on arrays, not strings.

// 🔹 Step 3: join("")
// ["o", "l", "l", "e", "h"].join("")
// 👉 Converts the array back into a string
// Result
// "olleh"
// ✅ Final Output
// console.log(reversed); // olleh
// 🧠 Very Simple Summary (Interview Friendly)
// // split() → breaks string into characters
// // reverse() → reverses the characters
// // join() → combines them back into a string

// 🎯 One-Line Interview Answer

// To reverse a string, we split it into an array, reverse the array, and join it back into a string.


let str = "hello";
let reversed = str.split("").reverse().join(""); // reverse a string 
console.log(reversed);


let sorted = str.split("").sort().join("")  // ascending
console.log(sorted);

let reverse_sorted = str.split("").sort().reverse().join("")  // decending
console.log(reverse_sorted);
