const { log } = require("console");

function greet() {
    var message = "Hello Team"

    console.log("Accesing the var inside function scope", message);  // inside function var is accesible

    if (true) {
        var messgeNew = "Good evening"
        console.log("Accessing var inside the if block", message); //inside if block var is accessible  
    }

}
// console.log("Accessing var outside the is block", messgeNew); // outside the function var is not accessible will give ReferenceError: messgeNew is not defined
greet()

console.log("===================================================================================");


function greet2() {
    let message = "Hello Team"

    console.log("Accesing the let inside function scope", message);  // inside function let is accesible

    if (true) {
        let messgeNew = "Good evening"
        console.log("Accessing let inside the if block", message); //inside if block let is accessible  
    }

}
// console.log("Accessing let outside the is block", messgeNew); // outside the function let is not accessible will give ReferenceError: messgeNew is not defined
greet2()

console.log("===================================================================================");
      
function greet3() {
    const message = "Hello Team"

    console.log("Accesing the const inside function scope", message);  // inside function const is accesible

    if (true) {
        let messgeNew = "Good evening"
        console.log("Accessing const inside the if block", message); //inside if block const is accessible  
    }

}
// console.log("Accessing const outside the is block", messgeNew); // outside the function const is not accessible will give ReferenceError: messgeNew is not defined
greet3()

console.log("===================================================================================");
      
log("Function scope means variables declared inside a function are not accessible outside the function");



log("Var and Let & const all are function scoped");