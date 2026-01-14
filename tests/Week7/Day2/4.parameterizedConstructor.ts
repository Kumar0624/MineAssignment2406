

class Employee3 {

    // Properties
    employeeName: string
    employeeID: number

      displayDetails() {
        // To access class properties inside the method use this keyword
        console.log(`Employee Name: ${this.employeeName}, Employee ID: ${this.employeeID}`);
    }      
    // Constructor method will be executed first when the object of the class is created
    // So here constructor is a special method which will be called automatically when the object of the class is created
    // Parameterized Constructor
    constructor(name: string, id: number) {
    // Assigning values to properties 
    // If you want to access the properties inside the constructor use this keyword
    // this keyword refers to the current object
        this.employeeName = name;
        this.employeeID = id;
        console.log("Constructor executed");
    }   
  

}
// Creating the object of the class with parameters
const empThree = new Employee3("John Doe", 101); // syntax to create the object
// Using the object to access method
empThree.displayDetails();