"use client";
import {
  createTheme,
  responsiveFontSizes,
  ScopedCssBaseline,
  ThemeProvider,
} from "@mui/material";
import { createContext, useContext, useMemo } from "react";

const AppThemeContext = createContext(null);

const AppThemeProvider = (props: any) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        palette: {
          primary: { main: `rgb(10,18,42)`, contrastText: `rgb(255,255,255)` },
          secondary: {
            main: `rgb(27,18,42)`,
            contrastText: `rgb(255,255,255)`,
          },
        },
        colorSchemes: {
          light: {
            palette: {
              primary: { main: `rgb(20,18,42)` },
              secondary: { main: `rgb(27,59,111)` },
            },
          },
          dark: {
            palette: {
              primary: { main: `rgb(20,18,42)` },
              secondary: { main: `rgb(27,59,111)` },
            },
          },
        },
      })
    );
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <ScopedCssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
