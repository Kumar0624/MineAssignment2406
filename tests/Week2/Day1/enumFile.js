var Environment;
(function (Environment) {
    Environment["QA"] = "https://qa.example.com";
    Environment["PROD"] = "https://prod.example.com";
})(Environment || (Environment = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["East"] = 100] = "East";
    StatusCode[StatusCode["West"] = 101] = "West";
    StatusCode[StatusCode["North"] = 102] = "North";
    StatusCode[StatusCode["South"] = 103] = "South";
})(StatusCode || (StatusCode = {}));
console.log(Environment.QA);
console.log(Environment.PROD);
console.log(StatusCode.East);
console.log(StatusCode.West);
