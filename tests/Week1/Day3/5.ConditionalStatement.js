

function check(browser){

    if(browser==="chrome"){
        console.log("chrome is Launched");  
    }else if(browser==="edge"){
        console.log("edge is Launched");      
    }else{
        console.log("Nothing Is Launched");   
    }
}

//check("empty")


function validate(browser){

    switch (browser) {
        case "chrome":
        console.log("chrome is Launched"); 
        break;
      
        case "edge":
            console.log("edge is Launched");
            
        default:
             console.log("Nothing Is Launched");
            break;
    }
}

validate("chrome")
