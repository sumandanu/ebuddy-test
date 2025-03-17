import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

// Define the routes you want to protect
const protectedRoutes = ["/dashboard", "/profile"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: "secret" });

  // Check if the user is trying to access a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If the user is not authenticated and tries to access a protected route, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If the user is authenticated and tries to access the login page, redirect to the dashboard
  if (request.nextUrl.pathname.startsWith("/auth/login") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth/login (login page)
     */
    "/((?!_next/static|_next/image|favicon.ico|auth/login).*)",
  ],
};
