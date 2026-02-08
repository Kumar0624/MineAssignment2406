

// named function

function namedFuction(){

    console.log(`This is named Function`);
    
}

namedFuction()

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

//==========================================================================================================

// anonymous function/ function expresion

let x = function (){
    console.log(`This is anonymous function/ function expresion`);
    
}

x()

// arrow function

let y = () => { // fat arrow is replaced for function keyword
    console.log("This is an arrow function");
    
}

y()

// single line function

const z = (a,b) => a+b
console.log(`This is Single line Function = ${z(10,20)}`);

