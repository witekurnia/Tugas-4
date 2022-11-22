const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /api/authaccount/registration", function () {

    it("Create New User", async function () {

        let name = "Wite Kurnia5";
        let email = "witekurnia5@gmail.com";

        const response = await request
            .post("/api/authaccount/registration")
            .send({
                "name": name,
                "email": email,
                "password": 123456
            });

        expect(response.body.message).to.eql("success");
        expect(response.body.data.Name).to.eql(name);
        expect(response.body.data.Email).to.eql(email);
    }),

    it("Email Already Used ", async function () {

        const response = await request
            .post("/api/authaccount/registration")
            .send({
                "name": "Wite Kurnia",
                "email": "witekurnia@gmail.com",
                "password" : 123456
            });
        
        expect(response.body.message).to.eql("The email address you have entered is already registered");
    })
})