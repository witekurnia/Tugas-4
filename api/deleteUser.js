const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

const AUTH = 'Bearer 8b9bc531-9831-4314-9506-91ef5c83054e'

describe("DELETE /api/users/148307", function () {

    it("Delete User ", async function () {

        const response = await request
        .delete("/api/users/148307")
        .set({
            Authorization: AUTH
            });

        
        expect(response.status).to.eql(200);
        expect(response.body.$id).to.eql(1);
        expect(response.body.id).to.eql(148307);
        expect(response.body.name).to.eql("Developer");
        expect(response.body.email).to.eql("Developer5@gmail.com");
        expect(response.body.location).to.eql("USA");

    })
})

