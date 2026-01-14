
class accessSpecifier {

    // Properties with different access specifiers
    public publicProperty: string = "I am a public property";
    private privateProperty: string = "I am a private property";
    protected protectedProperty: string = "I am a protected property";
    readonly readonlyProperty: string = "I am a readonly property";
    static staticProperty: string = "I am a static property";

    // Method to demonstrate access within the class
    demonstrateAccess() {
        console.log(this.publicProperty); // Accessible
        console.log(this.privateProperty); // Accessible
        this.privateProperty = "Modified Private Property"; // Modifiable
        console.log(this.protectedProperty); // Accessible
        this.protectedProperty = "Modified Protected Property"; // Modifiable
        console.log(this.readonlyProperty); // Accessible
        // this.readonlyProperty = "New Value"; // Error: Cannot assign to 'readonlyProperty' because it is a read-only property.
        console.log(accessSpecifier.staticProperty); // Accessible
    }   
}
// Creating an object of the class
const accessSpecObj = new accessSpecifier();

// Accessing public property from outside the class
console.log(accessSpecObj.publicProperty); // Accessible
accessSpecObj.publicProperty = "Modified Public Property";
console.log(accessSpecObj.publicProperty); // Modified value


// Accessing readonly property from outside the class
console.log(accessSpecObj.readonlyProperty); // Accessible
// Trying to modify readonly property from outside the class
// accessSpecObj.readonlyProperty = "New Value"; // Error: Cannot assign to 'readonlyProperty' because it is a read-only property.

// Accessing static property from outside the class
console.log(accessSpecifier.staticProperty); // Accessible
accessSpecifier.staticProperty = "Modified Static Property";
console.log(accessSpecifier.staticProperty); // Modified value

// Accessing private property from outside the class
// console.log(accessSpecObj.privateProperty); // Error: Property 'privateProperty' is private and only accessible within class 'accessSpecifier'.

// Accessing protected property from outside the class
// console.log(accessSpecObj.protectedProperty); // Error: Property 'protectedProperty' is protected and only accessible within class 'accessSpecifier' and its subclasses.

