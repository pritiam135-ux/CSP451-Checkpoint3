const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  test('returns status 200 and status === "healthy"', async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

  test("uptime exists and is a number", async () => {
    const response = await request(app).get("/health");

    expect(response.body).toHaveProperty("uptime");
    expect(typeof response.body.uptime).toBe("number");
  });
});
