import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import { createServer } from "../core/server";

describe("Server", () => {
  it("health check returns 200", async () => {
    await supertest(createServer())
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.ok).toBe(true);
      });
  });

  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/message/jared")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "hello jared" });
      });
  });

  it("users check returns 200", async () => {
    await supertest(createServer())
      .get("/v1/users")
      .expect(200)
      .then((res) => {
        expect(res.ok).toBe(true);
      });
  });
});
