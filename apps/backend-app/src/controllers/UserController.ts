import { Request, Response } from "express";
import { UserService } from "../services/users/UserService";
import { UserUpdate } from "../models/User";

export class UserController {
  static async registerUser(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    try {
      const registerUser: unknown = await UserService.registerUser(
        email,
        password
      );
      res.status(201).json({
        message: "User registered successfully",
        user: registerUser,
      });
    } catch (error: any) {
      console.error("Error registering user:", error.message);
      res
        .status(500)
        .json({ message: "Error registering user", error: error.message });
    }
  }

  static async signin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    try {
      const registerUser: any = await UserService.signIn(email, password);
      res.status(202).json({
        message: "User signIn successfully",
        user: registerUser.user.stsTokenManager,
      });
    } catch (error: any) {
      console.error("Error registering user:", error.message);
      res
        .status(500)
        .json({ message: "Error registering user", error: error.message });
    }
  }

  static async getUserByAccessToken(req: Request, res: Response) {
    try {
      const userEmail = req?.user as { email: string };
      const user: any = await UserService.getUserByEmail(userEmail.email);
      res.status(200).json(user.providerData);
    } catch (error: any) {
      console.error("Error registering user:", error.message);
      res
        .status(500)
        .json({ message: "Error registering user", error: error.message });
    }
  }

  static async putUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = req.body as UserUpdate;
      const createdUser = await UserService.updateUser(id, user);
      res.status(201).json(createdUser);
    } catch (error: any) {
      console.error("Error registering user:", error.message);
      res
        .status(500)
        .json({ message: "Error registering user", error: error.message });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      res.status(200).json(user);
    } catch (error: any) {
      console.error("Error registering user:", error.message);
      res
        .status(500)
        .json({ message: "Error registering user", error: error.message });
    }
  }
}
