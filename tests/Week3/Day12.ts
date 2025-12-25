
enum Environment {
    Development = "development",
    Staging = "staging",
    Production = "production",
    local = "local" 
}   

function runTests(env: Environment) {

    console.log(`Running tests in ${env} environment.`)

}
runTests(Environment.Staging);
runTests(Environment.Production);
runTests(Environment.Development);
runTests(Environment.local);

