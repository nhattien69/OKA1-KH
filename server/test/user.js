let chai = require("chai");
let chaiHttp = require("chai-http");

let server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('User API',() => {
    describe("GET /api/users", () => {
        it("It should get all the users", (done)=> {
            chai.request('http://localhost:3000')
                .get("/api/users")
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should not get all the users", (done)=> {
            chai.request('http://localhost:3000')
                .get("/api/user")
                .end((err,response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    describe("GET /api/user/num_id=:id", () => {
        it("It should get a user by ID", (done)=> {
            const userId = 5
            chai.request('http://localhost:3000')          
                .get("/api/user/num_id=" + userId)
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should not get a user by ID", (done)=> {
            const userId = 1234
            chai.request('http://localhost:3000')          
                .get("/api/users/num_id=" + userId)
                .end((err,response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    describe("POST /api/user", () => {
        it("It should post a new user", (done)=> {
            const user = {
                username: "Nhu12345",
                pass: "12345"
            }
            chai.request('http://localhost:3000')
                .post("/api/user")
                .send(user)
                .end((err,response) => {
                    response.should.have.status(201);
                    done();
                });
        });

        it("It should not post a new user", (done)=> {
            const user = {
               
                pass: "12345"
            }
            chai.request('http://localhost:3000')
                .get("/api/user")
                .send(user)
                .end((err,response) => {
                    response.should.have.status(404);
                    done();
                });
        });
    });

    describe("PUT /api/user/num_id=:id", () => {
        it("It should put a user", (done)=> {
            const userId = 19
            const user = {
                username: "Nhu123456",
                pass: "123456"
            }
            chai.request('http://localhost:3000')
                .put("/api/user/num_id="+userId)
                .send(user)
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should not put a user", (done)=> {
            const userId = 19
            const user = {
                username: "thuthao2604"
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

    describe("DELETE /api/user/num_id=:id", () => {
        it("It should delete a user", (done)=> {
            const userId = 19
            chai.request('http://localhost:3000')
                .delete("/api/user/num_id="+userId)
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should not delete a user", (done)=> {
            const userId = 1
            chai.request('http://localhost:3000')
                .delete("/api/user/num_id="+userId)
                .end((err,response) => {
                    response.should.have.status(200);
                    done();
                });
        });
    });
})