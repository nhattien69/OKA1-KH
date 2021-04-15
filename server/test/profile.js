let chai = require("chai");
let chaiHttp = require("chai-http");

let server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('Profile API',() => {
    describe("GET /api/profiles", () => {
        it("It should get all the profiles", (done)=> {
            chai.request('http://localhost:3000')
                .get("/api/profiles")
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should not get all the profiles", (done)=> {
            chai.request('http://localhost:3000')
                .get("/api/profile")
                .end((err,response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    describe("GET /api/profile/name_pro=:name", () => {
        it("It should get a profile by name", (done)=> {
            const TenNguoiDung = "thao"
            chai.request('http://localhost:3000')          
                .get("/api/user/name_pro=" + TenNguoiDung)
                .end((err,response) => {
                    response.should.have.status(404);
                    done();
                });
        });

        it("It should not get a profile by name", (done)=> {
            const TenNguoiDung = "a"
            chai.request('http://localhost:3000')          
                .get("/api/user/name_pro=" + TenNguoiDung)
                .end((err,response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });


    describe("PUT /api/user/num_id=:id", () => {
        it("It should put a profile", (done)=> {
            const userId = 5
            const user = {
                "TenNguoiDung": "thao",
                "SoDienThoai": 0909177,
                "CMND": null,
                "Email": null,
                "TheNganHang": null
            }
            chai.request('http://localhost:3000')
                .put("/api/user/num_id="+userId)
                .send(user)
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should not put a profile", (done)=> {
            const userId = 5
            const user = {
                "SoDienThoai": 0909177
            }
            chai.request('http://localhost:3000')
                .put("/api/user/num_id="+userId)
                .send(user)
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });
    });
})