

// named function

import { log } from "console";

function namedFunction() { 

        console.log(`This is named Function`);  
}

namedFunction()


// function with parameters

function sums(a: number, b: number) { // a and b are parameters
     let result = a + b;
    console.log("parameter fun = ", result);
}   
sums(10, 20); // passing arguments while calling the function


// anonymous function/ function expresion

let xx = function (a: number, b: number){
    let result = a + b;
    console.log(`This is anonymous function/ function expresion with sum = ${result}`);  
}
xx(10,20); // passing arguments while calling the function



// arrow function

let yy = (a: number, b: number) => { // fat arrow is replaced for function keyword
    
    return a + b; // implicit return
    let result = a + b;
    console.log(`This is an arrow function with sum = ${result}`);
    
}

yy(10,20)


// return type function

let zz = (a: number, b: number) => { // fat arrow is replaced for function keyword
    
    return a + b; // implicit return
    
}

console.log("return type function ",zz(10,20));


// return type function with type annotation

let zzz = (a: number, b: number) : number => { // fat arrow is replaced for function keyword
    
    return a + b; // implicit return
    
}

console.log("return type function ",zzz(10,20));

// UNONION TYPE IN FUNCTION

let zzzz = (a: number, b: number, c:(string|number|boolean)) =>{

if(typeof c === "number") {
    return a + b + c;
}else{
    return a + b;
}

} 


console.log("union type in function ",zzzz(10,20,30));

console.log("union type in function ",zzzz(10,20,"hello"));

// optional parameter in function

let zzzzz = (a: number, b: number, c?: number) => { // c is optional parameter
    
    return a + b; // implicit return
    
}

console.log("Optional type function ",zzzzz(10,20));

// function with object as parameter

type userType = {
    nam : string,
    age : number,
    city : string
}

let zzzzzz = (user: userType) => { // c is optional parameter
  
    console.log(user.nam,user.age,user.city);
}

zzzzzz({nam : "Kumar", age : 25, city : "Bangalore"});
