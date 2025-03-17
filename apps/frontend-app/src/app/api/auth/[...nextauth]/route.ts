import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../../../../services/authService";

async function refreshAccessToken(token: any) {
  return {
    ...token,
    error: "RefreshAccessTokenError",
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (credentials) {
          try {
            const res = await loginUser(
              credentials.email,
              credentials.password
            );
            return {
              id: 1,
              name: "User",
              email: credentials.email,
              ...res.data.user,
            };
          } catch (error) {
            console.log(error);
            throw new Error("User not found.");
          }
        }
        return null;
      },
    }),
  ],
  secret: "secret",
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (user && account) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.expirationTime;
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
