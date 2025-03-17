import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import { createServer } from "../core/server";

describe("Server", () => {
  it("users check returns 200", async () => {
    await supertest(createServer())
      .get("/v1/users")
      .expect(200)
      .then((res) => {
        expect(res.ok).toBe(true);
      });
  });
});
