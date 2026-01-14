import { expect, test } from "@playwright/test";
import { config } from "dotenv";

config({ path: './Data/qa.env' });

let token: any
let inst_url: any
let tokenType: any
let id : any


test.describe.serial(`Salesforce API testing`,async () => {
    
test(`Generate a token`, async ({ request }) => {
    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": process.env.CLIENT_ID!,
                "client_secret": process.env.CLIENT_SECRET!,
                "username": "ravindran.ramdas@testleaf.com",
                "password": "Ravitestleaf#1234",
                "grant_type": "password"
            }
        }
    )
    const responseBody = await response.json()
    console.log("Response Body :");
    console.log(responseBody);
    token = responseBody.access_token;
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
    console.log("Status Code = "+response.status());
    expect(response.status()).toBe(200);
    console.log("Status Text = "+response.statusText()); 
    expect(response.statusText()).toBe("OK");
    console.log("Test case completed Upto Token Generation");
    console.log("==============================================================================================================================");
})

test(`Create a Lead for Salesforce`, async ({ request }) => {
    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "RavindranNovWD25",
                "LastName": "R PlaywrightTrainer",
                "Company": "Testleaf"
            }
        }
    )
    const responseBody = await response.json()
    //console.log(responseBody);
    console.log("Status Code = "+response.status());
    expect(response.status()).toBe(201);
    console.log("Status Text = "+response.statusText()); 
    expect(response.statusText()).toBe("Created");
    id = responseBody.id;
    console.log("Test case completed Upto Create Lead");
    console.log("==============================================================================================================================");
})


test(`Fetch a specific Lead for Salesforce`, async ({ request }) => {
    const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        }
    )    
    console.log("Status Code = "+response.status());
    expect(response.status()).toBe(200);
    console.log("Status Text = "+response.statusText()); 
    expect(response.statusText()).toBe("OK");
    console.log("Test case completed Upto Fetch Lead");
    console.log("==============================================================================================================================");
})

test(`Update the created Lead for Salesforce`, async ({ request }) => {
    const response = await request.patch(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "Company": "Testleaf Updated"
            }
        }
    )
    console.log("Status Code = "+response.status());
    expect(response.status()).toBe(204);
    console.log("Status Text = "+response.statusText()); 
    expect(response.statusText()).toBe("No Content");
    console.log("Test case completed Upto Update Lead");
    console.log("==============================================================================================================================");  
    
})

test(`Delete the created Lead for Salesforce`, async ({ request }) => {
    const response = await request.delete(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Authorization": `${tokenType} ${token}`
            }
        }
    )  
    console.log("Status Code = "+response.status());
    expect(response.status()).toBe(204);
    console.log("Status Text = "+response.statusText()); 
    expect(response.statusText()).toBe("No Content");
    console.log("Test case completed Upto Delete Lead");
    console.log("==============================================================================================================================");
})

})