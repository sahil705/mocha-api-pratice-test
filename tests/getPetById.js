const axios = require("axios");
const { expect } = require("chai");

describe("Suite: Get Pet by ID", () => {
    try {
        it("should GET a pet by ID and return 200", async () => {
            const apiEndpoit = "https://petstore.swagger.io/v2/pet/10";
            const response = await axios.get(apiEndpoit);
            expect (response.status).to.equal(200);  
            expect(response.data).to.have.property("id", 10);
            expect(response.data).to.have.property("name","doggie");
        });

    }
    catch (error) {
        console.log("ERROR Fetching During Api Call:", error);
        throw error;

    }

});