

// strict equality operator ===
// checks for both value and type
console.log("Is a strictly equal to b ? ", 1 === 1) // true because both value and type are same
console.log("Is a strictly equal to b ? ", 1 === "1") // false because value is same but type is different

// non strict equality operator ==
// checks for value only, type conversion is done if types are different
console.log("Is a equal to b ? ", 1 == 1) // true because both value and type are same
console.log("Is a equal to b ? ", 1 == "1") // true because value is same, type conversion is done
console.log("Is a equal to b ? ", 1 == 2) // false because value is different

console.log(1==true) // true because true is converted to 1
console.log(0==false) // true because false is converted to 0
console.log(""==false) // true because "" is converted to 0 and false is converted to 0
console.log(null==undefined) // true because both are considered equal in non strict equality
console.log(null===undefined) // false because type is different


console .log("===================================================================================");
// Equality operator 

console.log(1 == 1);// true
console.log(1 == '1');// true
console.log(1 == 2);// false
console .log("===================================================================================");
// strict Equality operator
console.log(1===1); //true
console.log(1==='1');// false
console.log(1===2);// false

console .log("===================================================================================");

// In Equality operator 

console.log(1!=1);// false
console.log(1!="1"); // false
console.log(1!=2);// true

console .log("===================================================================================");

// strict In Equality operator

console.log(1!==1); // false
console.log(1!=="1");// true
console.log(1!==2); // true



