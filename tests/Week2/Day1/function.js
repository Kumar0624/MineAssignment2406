"use strict";
// named function
Object.defineProperty(exports, "__esModule", { value: true });
function namedFunction() {
    console.log("This is named Function");
}
namedFunction();
// function with parameters
function sums(a, b) {
    var result = a + b;
    console.log("parameter fun = ", result);
}
sums(10, 20); // passing arguments while calling the function
// anonymous function/ function expresion
var xx = function (a, b) {
    var result = a + b;
    console.log("This is anonymous function/ function expresion with sum = ".concat(result));
};
xx(10, 20); // passing arguments while calling the function
// arrow function
var yy = function (a, b) {
    return a + b; // implicit return
    var result = a + b;
    console.log("This is an arrow function with sum = ".concat(result));
};
yy(10, 20);
// return type function
var zz = function (a, b) {
    return a + b; // implicit return
};
console.log("return type function ", zz(10, 20));
// return type function with type annotation
var zzz = function (a, b) {
    return a + b; // implicit return
};
console.log("return type function ", zzz(10, 20));
// UNONION TYPE IN FUNCTION
var zzzz = function (a, b, c) {
    if (typeof c === "number") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
console.log("union type in function ", zzzz(10, 20, 30));
console.log("union type in function ", zzzz(10, 20, "hello"));
// optional parameter in function
var zzzzz = function (a, b, c) {
    return a + b; // implicit return
};
console.log("Optional type function ", zzzzz(10, 20));
