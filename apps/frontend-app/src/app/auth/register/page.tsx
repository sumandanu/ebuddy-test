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
import Logo from "../../../components/atoms/Logo";
import AuthSignUp from "../../../components/molecules/AuthSignUp";

const RegisterPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setMessage("Register success.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageContainer title="Register" description="this is Register page">
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
                <AuthSignUp
                  subtext={
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      color="textSecondary"
                      mb={1}
                    >
                      Sign Up
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
                        Already have an Account?
                      </Typography>
                      <Link href={"/auth/login"} underline="none">
                        <Typography
                          variant="overline"
                          fontWeight="500"
                          sx={{
                            textDecoration: "none",
                            color: "primary.main",
                          }}
                        >
                          Sign In
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

export default RegisterPage;
