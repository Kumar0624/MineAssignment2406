

// primitive data types
type myString = string;
type myNumber = number;
type myBoolean = boolean;   

let ac : myString = "hello world";

console.log(ac);


// array data types
type myArray = number[] | string[] | boolean[];

let arr : myArray = [10,20,30,40,50];

console.log(arr);

// object data types
type myObject = {
    name : string,
    age : number,
    city : string
}   

let obj : myObject = {
    name : "Kumar",
    age : 25,
    city : "Bangalore"
}

console.log(obj);

// Union type with type alias

type myUnion = number | string | boolean;
let union : myUnion = 10;

console.log(union);