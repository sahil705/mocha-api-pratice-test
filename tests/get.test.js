const axios = require("axios");
const { expect } = require("chai");

// ✅ Make sure baseURL is complete with https://
const api = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "x-api-key": "pro_ec5895bf3c17acb7b3e4996a34d0c40c7adc30a3de0867a45e7b39e331cc5378" 
  }
});

describe("User Api Test", () => {

  it("should GET all users and return 200", async () => {
    try {
      const res = await api.get("/api/users");
      console.log("Status:", res.status);
      console.log("Data:", res.data);
      expect(res.status).to.equal(200);
      expect(res.data.data).to.be.an("array");
    } catch (error) {
      console.log("ERROR:", error.message);
      console.log("ERROR URL:", error.config?.url);
      console.log("ERROR baseURL:", error.config?.baseURL);
      throw error;
    }
  });

  it("should POST and create a user", async () => {
    try {
      const res = await api.post("/api/users", {
        name: "John",
        job: "Tester"
      });
      console.log("Created:", res.data);
      expect(res.status).to.equal(201);
      expect(res.data).to.have.property("id");
    } catch (error) {
      console.log("ERROR:", error.message);
      throw error;
    }
  });

  

});