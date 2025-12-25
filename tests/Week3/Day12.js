var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Staging"] = "staging";
    Environment["Production"] = "production";
    Environment["local"] = "local";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("Running tests in ".concat(env, " environment."));
}
runTests(Environment.Staging);
runTests(Environment.Production);
runTests(Environment.Development);
runTests(Environment.local);
