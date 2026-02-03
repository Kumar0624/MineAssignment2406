// string
// declaration done with single and double quotes and backtickes



/* String declaration - "",'',`` */

/* 1.String literal
2. Object literal */

//String literal :

let companyName = "Testleaf" // Address 100
let firmName = "Testleaf" // Address 100

console.log(companyName===firmName); // true



//Object Literal

let companyNameNew = new String("Testleaf") // First memory space created for object literal 101
let firmNameNew = new String("Testleaf") // Second memory space is also created during object literal 102

console.log(companyNameNew===firmNameNew); // false 

// because its stored in a 2 different places




// concat  works only string 
let a = "Test "
let b = "leaf "
let c = "Chennai"

console.log(a.concat(b,c));

// if numeric meric means need to covert 
let aa = "Test Case Number "
let bb = 100

console.log(aa.concat(bb.toString()));





