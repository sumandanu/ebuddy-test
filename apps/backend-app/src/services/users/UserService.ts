import { User, UserUpdate } from "../../models/User";
import { UserRepository } from "../../repositories/UserRepository";

export class UserService {
  static async registerUser(email: string, password: string): Promise<unknown> {
    return UserRepository.registerUser(email, password);
  }
  static async signIn(email: string, password: string): Promise<unknown> {
    return UserRepository.signIn(email, password);
  }

  static async updateUser(id: string, user: UserUpdate): Promise<unknown> {
    return UserRepository.updateUser(id, user);
  }
  static async createUser(user: User): Promise<unknown> {
    return UserRepository.createUser(user);
  }
  static async getUserByEmail(email: string): Promise<unknown> {
    return UserRepository.getUserByEmail(email);
  }
  static async getUserById(id: string): Promise<User | null> {
    return UserRepository.getUserByEmail(id);
  }
}
