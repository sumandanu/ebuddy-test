"use client";
import {
  createTheme,
  responsiveFontSizes,
  ScopedCssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Plus_Jakarta_Sans } from "next/font/google";
import { createContext, useContext, useMemo } from "react";

const AppThemeContext = createContext(null);

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const AppThemeProvider = (props: any) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        palette: {
          primary: {
            main: "#5D87FF",
            light: "#ECF2FF",
            dark: "#4570EA",
          },
          secondary: {
            main: "#49BEFF",
            light: "#E8F7FF",
            dark: "#23afdb",
          },
          success: {
            main: "#13DEB9",
            light: "#E6FFFA",
            dark: "#02b3a9",
            contrastText: "#ffffff",
          },
          info: {
            main: "#539BFF",
            light: "#EBF3FE",
            dark: "#1682d4",
            contrastText: "#ffffff",
          },
          error: {
            main: "#FA896B",
            light: "#FDEDE8",
            dark: "#f3704d",
            contrastText: "#ffffff",
          },
          warning: {
            main: "#FFAE1F",
            light: "#FEF5E5",
            dark: "#ae8e59",
            contrastText: "#ffffff",
          },
          grey: {
            100: "#F2F6FA",
            200: "#EAEFF4",
            300: "#DFE5EF",
            400: "#7C8FAC",
            500: "#5A6A85",
            600: "#2A3547",
          },
          text: {
            primary: "#2A3547",
            secondary: "#5A6A85",
          },
          action: {
            disabledBackground: "rgba(73,82,88,0.12)",
            hoverOpacity: 0.02,
            hover: "#f6f9fc",
          },
          divider: "#e5eaef",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
                boxShadow:
                  "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: "7px",
              },
            },
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
