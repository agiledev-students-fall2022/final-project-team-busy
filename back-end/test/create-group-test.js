const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);

describe("Create Group", () => {
  describe("Group Created Successfully", () => {
    it("should return JSON containing info about group's name, display pic URL and friends added", (done) => {
      chai
        .request(app)
        .post("/create-group")
        .send({
            name: "group-test",
            dp: "https://picsum.photos/seed/picsum/200/300",
            friendsAdded: [
                {
                    "id": 1,
                    "name": "Rebe Odom",
                    "gender": "men",
                    "dp": "https://randomuser.me/api/portraits/men/3.jpg"
                },
                {
                    "id": 5,
                    "name": "Rolland Hallagan",
                    "gender": "women",
                    "dp": "https://randomuser.me/api/portraits/women/37.jpg"
                }
            ]
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("name");
            expect(res.body).to.have.property("friendsAdded");
          done();
        });
    });
  });

  describe("Group not created due to missing name", () => {
    it("should return JSON containing an error", (done) => {
      chai
        .request(app)
        .post("/create-group")
        .send({
            name: "",
            dp: "https://picsum.photos/seed/picsum/200/300",
            friendsAdded: [
                {
                    "id": 1,
                    "name": "Rebe Odom",
                    "gender": "men",
                    "dp": "https://randomuser.me/api/portraits/men/3.jpg"
                },
                {
                    "id": 5,
                    "name": "Rolland Hallagan",
                    "gender": "women",
                    "dp": "https://randomuser.me/api/portraits/women/37.jpg"
                }
            ]
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("error");
          done();
        });
    });
  });

  describe("Group not created due to no friends added", () => {
    it("should return JSON containing an error", (done) => {
      chai
        .request(app)
        .post("/create-group")
        .send({
            name: "group-test",
            dp: "https://picsum.photos/seed/picsum/200/300",
            friendsAdded: [
            ]
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("error");
          done();
        });
    });
  });
});