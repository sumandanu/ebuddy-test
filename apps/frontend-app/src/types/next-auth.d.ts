import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id?: unknown;
      /** The user's postal address. */
      address: string;
    } & DefaultSession["user"];
  }
}
