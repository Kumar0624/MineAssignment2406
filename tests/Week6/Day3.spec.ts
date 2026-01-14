import { expect, test } from "@playwright/test";




let id : any //Global variable declaration, explicit inference with any datatype

test.describe.serial(`Service Now`,async()=>{

test(`Creating Incident using Playwright with API`, async ({ request }) => {


    const response = await request.post(`https://dev291487.service-now.com/api/now/table/incident`,

        {
            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-type": "application/json"
            },
            data: {
                "short_description": "Email not working via Playwright API Call-Kumar M",
                "description": "User cannot send or receive emails",
                "comments": "Updated via Playwright API Call-Kumar M",
                "work_notes": "Checked mail server logs",
                "subcategory": "Email",
                "impact": "2",
                "urgency": "2"
            }
        }
    )
    const responseBody = await response.json()
    //console.log(responseBody);


    //Assert Status code
    console.log(response.status())// 201
       expect(response.status()).toBe(201)

    //Asser Status text
    console.log(response.statusText())// Created
       expect(response.statusText()).toBe("Created")  

    id = responseBody.result.sys_id //Assigning value to global variable
    console.log("Sys_ID = "+id);    

    console.log("Test suite completed Upto Create method");

    console.log("==============================================================================================================================");
})

test(`Fetch the created incident using playwright with API`,async ({request}) => {

    const response = await request.get(`https://dev291487.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-type": "application/json"
            }
        }
    )
    const res = await response.json()
    console.log(response.status())
       expect(response.status()).toBe(200)

    console.log(response.statusText())
       expect(response.statusText()).toBe("OK")
    //console.log(res);    
    console.log("Test suite completed Upto Fetch method");
    console.log("==============================================================================================================================");
    
})

test(`Patch the created incident using playwright with API`,async ({request}) => {

    const response = await request.patch(`https://dev291487.service-now.com/api/now/table/incident/${id}`,
       {
            headers:{
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-type": "application/json"
            },
            data: {
                "short_description": "Email not working via Playwright API Call-Kumar M- Updated",
                "description": "User cannot send or receive emails - Updated",
            }
        }
    ) 
    console.log(response.status())
       expect(response.status()).toBe(200)

    console.log(response.statusText())
       expect(response.statusText()).toBe("OK")
       console.log("Test suite completed Upto Patch method");
       console.log("==============================================================================================================================");
})

test(`Delete the created incident using playwright with API`,async ({request}) => {

    const response = await request.delete(`https://dev291487.service-now.com/api/now/table/incident/${id}`,
       {
            headers:{   
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-type": "application/json"
            }
        }
    )
    console.log(response.status())
       expect(response.status()).toBe(204)  
    console.log(response.statusText())
       expect(response.statusText()).toBe("No Content")     
    console.log("Test suite completed Upto Delete method");
})
})