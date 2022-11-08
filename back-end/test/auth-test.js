const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);

describe("Login", () => {
  describe("Failed login with no password or email", () => {
    it("should return an error", (done) => {
      chai
        .request(app)
        .post("/auth/login")
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          done();
        });
    });

    describe("Failed login with invalid email", () => {
      it("should return an error with an error message", (done) => {
        chai
          .request(app)
          .post("/auth/login")
          .send({
            email: "invalid",
            password: "password123",
          })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property(
              "error",
              '"email" must be a valid email'
            );
            done();
          });
      });
    });

    describe("Failed login with invalid password", () => {
      it("should return an error with an error message", (done) => {
        chai
          .request(app)
          .post("/auth/login")
          .send({
            email: "test@gmail.com",
            password: "pass",
          })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property(
              "error",
              '"password" length must be at least 8 characters long'
            );
            done();
          });
      });
    });

    describe("Failed login with incorrect password or email", () => {
      it("should return an error with error message", (done) => {
        chai
          .request(app)
          .post("/auth/login")
          .send({
            email: "incorrect@gmail.com",
            password: "incorrectPassword",
          })
          .end((err, res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property(
              "error",
              "Incorrect email or password"
            );
            done();
          });
      });
    });

    describe("Successful login", () => {
      it("should return a user object", (done) => {
        chai
          .request(app)
          .post("/auth/login")
          .send({
            email: "test@gmail.com",
            password: "password123",
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property("name");
            expect(res.body).to.have.property("id");
            done();
          });
      });
    });
  });
});

describe("Register", () => {
  describe("Failed register with no email, password, or passwordConfirm", () => {
    it("should return an error", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });

  describe("Failed register with invalid email", () => {
    it("should return an error with an error message", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({
          email: "invalid",
          password: "password123",
          passwordConfirm: "password123",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property(
            "error",
            '"email" must be a valid email'
          );
          done();
        });
    });
  });

  describe("Failed register with invalid password", () => {
    it("should return an error with an error message", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({
          email: "test@gmail.com",
          password: "pass",
          passwordConfirm: "password123",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property(
            "error",
            '"password" length must be at least 8 characters long'
          );
          done();
        });
    });
  });

  describe("Failed register with non-matching passwords", () => {
    it("should return an error with an error message", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({
          email: "test@gmail.com",
          password: "password123",
          passwordConfirm: "password321",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property(
            "error",
            '"passwordConfirm" must be [ref:password]'
          );
          done();
        });
    });
  });

  describe("Successful register", () => {
    it("Should return a user object", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send({
          email: "new@gmail.com",
          password: "password123",
          passwordConfirm: "password123",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("name");
          expect(res.body).to.have.property("id");
          done();
        });
    });
  });
});
