/* eslint-disable @typescript-eslint/no-require-imports */
import * as admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import config from ".";

const serviceAccount = require("../../path/to/serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config.firebase.databaseURL,
  });
}

// Initialize Firebase
const app = initializeApp(config.firebase);
const auth = getAuth(app);

if (config.env === "development") {
  connectAuthEmulator(auth, config.emulator.auth.uri);
}

export { admin, auth };
