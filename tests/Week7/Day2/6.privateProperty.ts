

class privateProperty {

    // Private property
    private secretCode: string = "12345";

    // Method to access private property within the class
    revealSecret() {
        console.log(`The secret code is: ${this.secretCode}`);
    }

    public get readData() {
        return this.secretCode;
    }

    public set writeData(code : string) {
        this.secretCode = code;
    }
}   
// Creating an object of the class
const privatePropObj = new privateProperty();
privatePropObj.revealSecret();  
// Accessing private property from outside the class using getter method
console.log(`The secret code is: ${privatePropObj.readData}`);

// Modifying private property from outside the class using setter method
privatePropObj.writeData = "67890";
console.log(`The modified secret code is: ${privatePropObj.readData}`);