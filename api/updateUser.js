const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

const AUTH = 'Bearer e1c9f144-3e6e-4d9e-8b64-6ae4259d6485'

describe("PUT /api/users/148307", function () {

    it("Update User ", async function () {

        const response = await request
            .put("/api/users/148307")
            .set({
                Authorization: AUTH
                })
            .send({
                "id": 148307,
                "name": "Developer",
                "email": "Developer5@gmail.com",
                "location": "USA"
            });

        expect(response.statusCode).to.eql(200);
        expect(response.body.Id).to.eql(148307)
        expect(response.body.Name).to.eql("Developer");
        expect(response.body.Email).to.eql("Developer5@gmail.com");
    })
})