const request = require("supertest")("https://restful-booker.herokuapp.com");
const expect = require("chai").expect;

// describe("POST /auth", function () {

//     it("Update User ", async function () {

//         const response = await request
//             .post("/auth")
//             .send({
//                 "username": "admin",
//                 "password": "password123",
//             });

//         expect(response.statusCode).to.eql(200);
//         expect(response.body.token).to.eql("abc123");

//         let token = response.body.token

//     })
// })

// describe("POST /booking", function () {

//     it("Update User ", async function () {

//         const response = await request
//             .post("/booking")
//             .set({
//                 "Content-Type": 'application/json',
//                 'Accept': 'application/json',
//             })
//             .send({
//                 "firstname": "Jim",
//                 "lastname": "Brown",
//                 "totalprice": 111,
//                 "depositpaid": true,
//                 "bookingdates": {
//                     "checkin": "2018-01-01",
//                     "checkout": "2019-01-01"
//                 },
//                 "additionalneeds": "Breakfast"
//             });

//         expect(response.statusCode).to.eql(200);
//         expect(response.body.bookingid).to.eql(57806);

//         // let token = response.body.token

//     })
// })

describe("PUT /booking/57806", function () {

    it("Update User ", async function () {

        const response = await request
            .put("/booking/57806")
            .set({
                "Content-Type": 'application/json',
                'Accept': 'application/json',
                'Cookie' : 'token=84554f7624a9f2b'
            })
            .send({
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            });

        expect(response.statusCode).to.eql(200);


    })
})