


// block scope with let
if (true) {
    let add = 10
    console.log("Accessing let inside a block = ", add)
}

//console.log("Accessing let outside a block = ", add) // ReferenceError: add is not defined


console.log("===================================================================================");

if (true) {
    const add = 10
    console.log("Accessing const inside a block = ", add)
}

//console.log("Accessing const outside a block = ", add) // ReferenceError: add is not defined


console.log("===================================================================================");

if (true) {
    var add = 10
    console.log("Accessing Var Inside a block = ", add)
}

console.log("Accessing Var Outside a block = ", add);


console.log("===================================================================================");

console.log("So Let and Const are block scoped");

log("Block scope means variables declared inside a block { } are not accessible outside the block");


