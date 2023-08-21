import request from "supertest";
import app from "../app";

describe("App ", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200)
      .expect((res) => {
        expect(res.text).toContain("List of users");
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
