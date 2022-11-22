const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;

describe("DELETE /booking/57806", function () {

    it("Delete User ", async function () {

        const response = await request
            .delete("/booking/57806")
            .set({
                "Content-Type": 'application/json',
                'Authorisation' : 'Basic YWRtaW46cGFzc3dvcmQxMjM=84554f7624a9f2b',
                // 'Cookie' : 'token=84554f7624a9f2b',

            })

        expect(response.statusCode).to.eql(201);


    })
})