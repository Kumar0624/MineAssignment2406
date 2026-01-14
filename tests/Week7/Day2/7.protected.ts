

class   protectedExample {
    protected protectedProperty: string = "I am a protected property";

    // Method to access protected property within the class
    demonstrateProtectedAccess() {
        console.log(this.protectedProperty);
    }
}  


// Creating a subclass to demonstrate protected property access
class SubClass extends protectedExample {
    accessProtectedProperty() {
        console.log(`Accessing protected property from subclass: ${this.protectedProperty}`);
        this.protectedProperty = "Modified Protected Property in Subclass";
        console.log(`Modified protected property from subclass: ${this.protectedProperty}`);
    }
}   

// Creating an object of the subclass
const subClassObj = new SubClass();
subClassObj.accessProtectedProperty();  
// Accessing protected property from outside the class will result in an error
// console.log(subClassObj.protectedProperty); // Error: Property 'protectedProperty' is protected and only accessible within class 'protectedExample' and its subclasses.