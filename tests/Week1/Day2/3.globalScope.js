

var companyName = "Testleaf" // Global declaration

if (true) {
   // var companyName = "Testleaf"
    console.log("Accessing var inside the if block", companyName);
}
console.log("Accessing var outisde the if block", companyName);

console.log("===================================================================================");

function
    test() {
  //  var companyName = "Testleaf"
    console.log("Accessing var inside the function", companyName);
}

test()
console.log("Global scope means variables declared outside a function are accessible everywhere");

