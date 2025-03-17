"use client";
import React, { useState } from "react";
import {
  Alert,
  Box,
  Card,
  Grid2,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PageContainer from "../../../components/organisms/container/PageContainer";
import AuthLogin from "../../../components/molecules/AuthLogin";
import Logo from "../../../components/atoms/Logo";
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const email = e.target.username.value;
      const password = e.target.password.value;
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setMessage(result.error);
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid2
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid2 display="flex" justifyContent="center" alignItems="center">
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <Alert
                variant="filled"
                severity="error"
                sx={{ display: message ? "flex" : "none" }}
              >
                {message}
              </Alert>
              <form onSubmit={handleSubmit}>
                <AuthLogin
                  subtext={
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      color="textSecondary"
                      mb={1}
                    >
                      Signin
                    </Typography>
                  }
                  subtitle={
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      mt={3}
                    >
                      <Typography
                        color="textSecondary"
                        variant="overline"
                        fontWeight="500"
                      >
                        Don&apos;t have an account?
                      </Typography>
                      <Link href={"/auth/register"} underline="none">
                        <Typography
                          variant="overline"
                          fontWeight="500"
                          sx={{
                            textDecoration: "none",
                            color: "primary.main",
                          }}
                        >
                          Sign Up
                        </Typography>
                      </Link>
                    </Stack>
                  }
                />
              </form>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
