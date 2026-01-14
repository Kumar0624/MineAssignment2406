


var parameterConstrutor = /** @class */ (function () {

    
    function parameterConstrutor(name, age) {
        this.myName = name;
        this.myAge = age;
    }
    parameterConstrutor.prototype.personDetails = function () {
        console.log("My name is ".concat(this.myName, " and my age is ").concat(this.myAge));
    };
    return parameterConstrutor;
}());
var paraConstru = new parameterConstrutor("Kumar M", 25);
paraConstru.personDetails();
