const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);

describe("LookUp Event", () =>{
    describe("No event found", () => {
        it("should return an error", (done) => {
            chai
                .request(app)
                .get("/lookupevent/7877")
                .end((err,res) => {
                    expect(res).to.have.status(404);
                    console.log(res.body);
                    expect(res.body).to.have.property("error", "No Event Found");
                    done();
            });
        });
    });

    describe("Event Found", () =>{
        it("should return event object", (done) =>{
            chai
                .request(app)
                .get("/lookupevent/2456")
                .end((err, res) =>{
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a("object");
                    expect(res.body).to.have.property("id");
                    expect(res.body).to.have.property("title");
                    expect(res.body).to.have.property("description");
                    expect(res.body).to.have.property("members");
                    expect(res.body).to.have.property("groups");
                    done();
            });
        });
    });
});