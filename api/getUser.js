const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

const AUTH = 'Bearer e1c9f144-3e6e-4d9e-8b64-6ae4259d6485'

describe("GET /api/users/148307", function () {

    it("Return User ", async function () {

        const response = await request
        .get("/api/users/148307")
        .set({
            Authorization: AUTH
            });

        
        expect(response.status).to.eql(200);
        expect(response.body.id).to.eql(148307);
        expect(response.body.name).to.eql("Developer");
        expect(response.body.email).to.eql("Developer5@gmail.com");
        expect(response.body.location).to.eql("USA");

    })
})

