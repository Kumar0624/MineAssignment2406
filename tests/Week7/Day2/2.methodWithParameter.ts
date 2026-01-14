// Defining the Employee class
class Employee {

    // Properties
   browserName = "Chrome";
   browserVersion = "115.0.5790.98";

    // Methods with parameters
    setEmployeeDetails(name: string, id: number) {  
        console.log(`Employee Name: ${name}, Employee ID: ${id}`);
        // To access class properties inside the method use this keyword
        console.log(`Browser Name: ${this.browserName}, Browser Version: ${this.browserVersion}`);
    }         
}

// Creating the object of the class
const emp = new Employee(); // syntax to create the object  

// Using the object to access methods with different arguments
emp.setEmployeeDetails("Alice Smith", 202); 
emp.setEmployeeDetails("Bob Johnson", 303);
emp.setEmployeeDetails("Charlie Brown", 404);
console.log(emp.browserName);
console.log(emp.browserVersion);