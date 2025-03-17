import { User, UserUpdate } from "../models/User";
import { admin, auth } from "../config/firebase-admin";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

export class UserRepository {
  private static db = admin.firestore();

  static async registerUser(email: string, password: string): Promise<unknown> {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = await this.db
      .collection("users")
      .doc(email)
      .set({ name: "olan", email });
    console.log(user);
    if (res) {
      sendEmailVerification(res.user);
    } else {
      throw new Error("could not complete signup");
    }
    return user;
  }

  static async signIn(email: string, password: string): Promise<unknown> {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  }

  static async updateUser(id: string, data: UserUpdate): Promise<unknown> {
    return await this.db
      .collection("users")
      .doc(id)
      .update({ ...data });
  }

  static async createUser(user: User): Promise<User> {
    await this.db.collection("users").doc(user.id).set(user);
    return user;
  }

  static async getUserByEmail(email: string): Promise<any> {
    const doc = await admin.auth().getUserByEmail(email);
    return doc ? doc.toJSON() : null;
  }
  static async getUserById(id: string): Promise<User | null> {
    const doc = await this.db.collection("users").doc(id).get();
    return doc.exists ? (doc.data() as User) : null;
  }
}
