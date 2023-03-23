const { response } = require("express");
const request = require("supertest")
const baseURL = "http://localhost:3000"

describe("GET /encode", () => {
    const encode = {
        input: "aaahhggg"
    }
    it("should return 401", async () => {
        const response = await request(baseURL).get("/encode").send(encode);
        expect(response.statusCode).toBe(401);
        expect(response.body.error).not.toBe(null);
    });
});

describe("GET /encode", () => {
    const encode = {
        input: "aaahhggg"
    }
    it("should return 200", async () => {
        const response = await request(baseURL).get("/encode").set("Authorization", "xyz0987654321").send(encode);
        expect(response.statusCode).toBe(200);
    });
    it("should return encoded value", async () => {
        const response = await request(baseURL).get("/encode").set("Authorization", "xyz0987654321").send(encode);
        expect(response.body.encoded_value).toBe('a3h2g3');

    });
});
