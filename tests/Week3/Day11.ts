
type  paymentMethods = "UPI" | "CreditCard" | "PayPal";

function makePayment (paymentType : paymentMethods) {

    if(paymentType === "UPI") {
        console.log("Processing UPI payment...");
    } else if (paymentType === "CreditCard") {
        console.log("Processing Credit Card payment...");
    } else if (paymentType === "PayPal") {
        console.log("Processing PayPal payment...");
    }   

}

makePayment("CreditCard");
