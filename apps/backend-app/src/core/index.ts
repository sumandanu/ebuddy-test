import { onRequest } from "firebase-functions/v2/https";
import { createServer } from "./server";

const app = createServer();

export const api = onRequest({ cors: true }, app);
