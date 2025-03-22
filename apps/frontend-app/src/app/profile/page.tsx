"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/organisms/AdminLayout";
import PageContainer from "../../components/organisms/container/PageContainer";
import { Box, Card, Grid2, TextField, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session }: any = useSession();

  const [data, setData]: any = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      if (session)
        await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/me`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setData(data[0]);
          })
          .catch((error) => {
            console.log({ error });
          });
    }
    fetchPosts();
  }, [session]);

  return (
    <AdminLayout>
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box>
          <Typography variant="h3" gutterBottom>
            Profile
          </Typography>
          <Card title="My Profile">
            <form>
              <Grid2 spacing={2} padding={2}>
                <TextField
                  id="name"
                  placeholder="Email"
                  name="email"
                  variant="outlined"
                  defaultValue={data?.email}
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  disabled
                />
              </Grid2>
            </form>
          </Card>
        </Box>
      </PageContainer>
    </AdminLayout>
  );
};

export default ProfilePage;
