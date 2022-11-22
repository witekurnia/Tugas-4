const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /api/authaccount/login", function () {

    it("Login User ", async function () {

        const response = await request
            .post("/api/authaccount/login")
            .send({
                "email": "developer5@gmail.com",
                "password": 123456
            });

        expect(response.body.code).to.eql(0);
        expect(response.body.data.Name).to.eql("Developer");
        expect(response.body.data.Email).to.eql("Developer5@gmail.com");
        expect(response.body.data.Id).to.eql(148307);
        expect(response.body.data.Token).to.eql("20016ba4-1858-4690-9721-3f9bda1e90c2");
    }),

    it("Invalid email and password User ", async function () {

        const response = await request
            .post("/api/authaccount/login")
            .send({
                "email": "developerinvalid@gmail.com",
                "password": 1
            });

        expect(response.body.code).to.eql(1);
        expect(response.body.message).to.eql("invalid username or password");
    })
})
