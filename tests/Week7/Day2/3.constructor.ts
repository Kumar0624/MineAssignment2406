

class EmployeeTwo {
    
    // Constructor to initialize properties 
    // This is Default Constructor
    constructor() {
       console.log("EmployeeTwo class constructor method called");
    }

    normalMethod() {
        console.log("This is a normal method inside EmployeeTwo class");
    }
}
// Creating the object of the class
const empTwo = new EmployeeTwo(); // syntax to create the object
// Using the object to access normal method
empTwo.normalMethod();