
// Variable Declaration and Re Declaration and Re assignment

var a = 123
var a = 456

a = 789 // re assignment is allowed

console.log(a)



let b = 123
// let b = 456  it is re declaration error

b = 456 // re assignment is allowed
console.log(b) 


const c = 123
console.log(c)
// const c = 456  it is re declaration error
c = 789  // re assignment is not allowed run time you will get error like ==> :TypeError: Assignment to constant variable.
console.log(c)


// block scope
//const b
// 
let d  
//
var e 