"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import AppThemeProvider from "../context/AppThemeContext";
import "./styles.css";
import StoreProvider from "./StoreProvider";
import AuthSessionProvider from "../components/SessionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <StoreProvider>
        <body>
          <AuthSessionProvider>
            <AppRouterCacheProvider options={{ enableCssLayer: false }}>
              <AppThemeProvider>
                <InitColorSchemeScript attribute="class" />
                {children}
              </AppThemeProvider>
            </AppRouterCacheProvider>
          </AuthSessionProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
