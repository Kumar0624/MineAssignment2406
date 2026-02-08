// 01. length In JavaScript, length is a property (not a method) used to find the number of characters in a string.

let strin = " Kumar "
console.log(`Length of the String is = ${strin.length}`);

// 02. charAt() is a string method used to get the particular character from the string

console.log(`Character is = ${strin.charAt(2)}`);
console.log(`Invalid Index = ${strin.charAt(20)}`); // If Index Is Invalid Returns empty string, not an error.

// 03. toUpperCase() is a string method used to convert all characters in a string to uppercase

console.log(`convert to upper case ${strin.toUpperCase()}`);

// 04. toLowerCase() is a string method used to convert all characters in a string to lowercase (small letters).

console.log(`convert to lower case ${strin.toLowerCase()}`);

// 05. trim() is a string method used to remove whitespace from both the beginning and the end of a string.

let b = strin.trim()

console.log(`trimmed text ${b} and length is ${b.length}`);

//06. indexOf() is a string method used to find the position of a character in the string.
         //  if the given not available it return -1
         //  if the character appears many times, it gives the first position.

console.log(`IndexOf is ${b.indexOf("m")}`);
console.log(`Invalid IndexOf is ${b.indexOf("M")}`); 


// 07. lastIndexOf() is a string method used to find the position of a character in the string.
         //  if the given not available it return -1
         //  if the character appears many times, it gives the last position.

console.log(`lastIndexOf is ${b.indexOf("a")}`);
console.log(`Invalid lastIndexOf is ${b.indexOf("M")}`); 

// 08 includes() checks if a word or character is present in a string.
          // It returns true if found, otherwise false.

console.log(`Includes ${b.includes("Kum")}`);
console.log(`Includes ${b.includes("KUM")}`);

// 09 startsWith  checks if a string begins with a given word or character.
          // It returns true if it starts with it, otherwise false.

console.log(`startwith ${b.startsWith("K")}`);
          
// 10 endsWith() checks if a string ends with a given word or character.
           // It returns true if it ends with it, otherwise false.

console.log(`endswith ${b.endsWith("r")}`);
          
// 11. replace() changes the first matching word or character in a string.

let c = b.replace("m","M")
console.log(`replaced string is ${c}`);


// 12. replaceAll() replaces all matching words or characters in a string.

let D = "Madam"
console.log(`replaced all ${D.replaceAll("a","b")}`);


// reverse a given string 
let str = "hello";
let reversed = str.split("").reverse().join(""); 

// split  Converts the string into an array of characters
// revrse Reverses the array order. reverse() works on arrays, not strings.
// Converts the array back into a string using join 
// join() combines array elements into one string.

console.log(reversed);


// slice ==> Seperate the string 

let e = "JavaScript"

console.log(`${e.slice(0,4)}`);
// only start index
console.log(`without end index = ${e.slice(4)}`); // end index is not mandatory

// negative index
console.log(`negative index in slice = ${e.slice(-5, -3)}`);

// negative index and positive index
console.log(`negative index in slice = ${e.slice(-5, 3)}`); // returns empty string

// swap 
console.log(`${e.slice(6,4)}`); // returns empty string

//======================================================================================================

//subString 
let i = "MicroSoft"
// negative index
console.log(`${i.substring(-5)}`); // substring() treats negative values as 0.

console.log(`SubString = ${i.substring(2,-5)}`); // substring() treats negative values as 0.
// swap
console.log(`Swap = ${i.substring(5,4)}`);

// slice() supports negative values and is more powerful.
// substring() does not support negative values and auto-swaps indexes.
// ✔ Use slice() → modern, flexible, preferred
// ✔ Use substring() → basic usage only