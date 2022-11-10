const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);

describe("LookUp User", () =>{
    describe("No user found", () => {
        it("should return an error", (done) => {
            chai
                .request(app)
                .get("/lookupuser/tomj")
                .end((err,res) => {
                    expect(res).to.have.status(404);
                    console.log(res.body);
                    expect(res.body).to.have.property("error", "No User Found");
                    done();
            });
        });
    });

    describe("User Found", () =>{
        it("should return user object", (done) =>{
            chai
                .request(app)
                .get("/lookupuser/johnny123")
                .end((err, res) =>{
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a("object");
                    expect(res.body).to.have.property("first_name");
                    expect(res.body).to.have.property("last_name");
                    expect(res.body).to.have.property("username");
                    done();
            });
        });
    });
});