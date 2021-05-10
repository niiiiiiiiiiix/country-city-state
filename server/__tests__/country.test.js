const request = require("supertest");
const app = require("../src/app");
const dbHandlers = require("../src/utils/dbHandler");

describe("Country State City", () => {
  beforeAll(async () => {
    await dbHandlers.connect();
  });
  afterAll(async () => {
    await dbHandlers.clearDatabase();
    await dbHandlers.closeDatabase();
  });

  describe("GET /", () => {
    it("should return welcome message", async () => {
      const { text } = await request(app).get("/").expect(200);
      expect(text).toEqual("Welcome!");
    });
  });
});
