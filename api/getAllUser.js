const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

const AUTH = 'Bearer e1c9f144-3e6e-4d9e-8b64-6ae4259d6485'

describe("GET /api/users", function () {

    it("Return User ", async function () {

        const response = await request
        .get("/api/users")
        .set({
            Authorization: AUTH
            });

        
        expect(response.status).to.eql(200);
        expect(response.body.page).to.eql(1);
    })
})

