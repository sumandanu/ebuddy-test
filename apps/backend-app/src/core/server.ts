import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

import apiV1 from "../routes/v1";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        origin: ["http://127.0.0.1:5001", "http://localhost:3002"], // Domain frontend
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // Mengizinkan cookies dikirim
      })
    )
    .use("/v1", apiV1);
  return app;
};
