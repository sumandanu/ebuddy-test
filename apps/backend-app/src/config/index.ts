/* eslint-disable turbo/no-undeclared-env-vars */
import * as dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface EmulatorConfig {
  firestore: { host: string; port: number };
  auth: { uri: string };
  functions: { host: string; port: number };
}

interface AppConfig {
  env: string;
  firebase: FirebaseConfig;
  emulator: EmulatorConfig;
}

const config: AppConfig = {
  env: process.env.NODE_ENV || "development",
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "",
    projectId: process.env.FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.FIREBASE_APP_ID || "",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "",
  },
  emulator: {
    firestore: {
      host: process.env.LOCAL_FIRESTORE_EMULATOR_HOST || "",
      port: parseInt(process.env.LOCAL_FIRESTORE_EMULATOR_PORT || "0"),
    },
    auth: { uri: process.env.LOCAL_AUTH_EMULATOR_URI || "" },
    functions: {
      host: process.env.LOCAL_FUNCTIONS_EMULATOR_HOST || "",
      port: parseInt(process.env.LOCAL_FUNCTIONS_EMULATOR_PORT || "0"),
    },
  },
};

export default config;
