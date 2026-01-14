// Defining a class
class Browser {

    // Properties
   browserName = "Chrome";
   browserVersion = "115.0.5790.98";


    // Methods  --> Actionable things
    launchBrowser() {
        console.log("Launching the browser");
    }
    loginPage() {
        console.log("Logging into the application");
    } 
}

// Creating the object of the class
const myBrowser = new Browser(); // syntax to create the object

// Using the object to access properties and methods
myBrowser.launchBrowser();
myBrowser.loginPage();
myBrowser.browserName = "Firefox"; // Modifying the property value but it will not reflect outside the class
console.log(myBrowser.browserName);
console.log(myBrowser.browserVersion);