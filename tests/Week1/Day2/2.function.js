
// named function
function newOne() {
    console.log("This is a new function!");
}

newOne();


// function with parameters
function sum(a, b) { // a and b are parameters
    let result = a + b;
    console.log("Sum is = ", result);
}   
sum(10, 20); // passing arguments while calling the function


function add(x, y) {

    let result = x + y;
    return result;
}

console.log("Return Function = ",add(10, 20)); // so here our add function hold result value
