


let letters = ["a","b","c","d"]

console.log(`Original Array ${letters}`);

// push() appends new elements to the end of an array, modifies the original array, and returns the new length of array . It’s an expression because it returns a value.

letters.push("e","f","g")

console.log(`After Add letter using Push = ${letters}`);

// unshift () Inserts new elements at the start of an array, and returns the new length of the array.

letters.unshift("1","2","3")

console.log(`After Add letter using Unshift = ${letters}`);

// pop() Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

letters.pop()

console.log(`After remove letter using pop = ${letters}`);

// shift() Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

letters.shift()

console.log(`After remove letter using shift = ${letters}`);

// slice 

let sli = ["a","b","c","d"]

console.log(`Original Array ${sli}`);

console.log(`After Slice = ${sli.slice(1,3)}`);


// splice --> add or remove the elments from the array
//array.splice(startIndex,deleteCount,ele1,ele2)

let bb = ["a","b","c","d","e"]

 bb.splice(1,2,"A","B")

console.log("After Splice = ",bb);


let i = ["1","2","3"]

let j = ["4","5","6"]

// concatenation 

let concatArray = i.concat(j)
console.log(concatArray);

// spread syntax (...) mentioned with 3 dots 


let spreadSyntax = [...i,...j]

console.log(spreadSyntax);

 
// sort () method used to sort the elements of an array.
// array.sort(compareFunction)


let ss = [45,44,23,11,17]

ss.sort((a,b) => a-b) // ascending

console.log(ss);

ss.sort((a,b) => b-a) // decending

console.log(ss);

ss.reverse() // reverse a array

console.log(ss);

