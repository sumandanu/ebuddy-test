"use client";
import React from "react";
import AdminLayout from "../../components/organisms/AdminLayout";
import PageContainer from "../../components/organisms/container/PageContainer";
import { Box, Typography } from "@mui/material";
import DashboardOverview from "../../components/organisms/DashboardOverview";

const DashboardPage = () => {
  return (
    <AdminLayout>
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box>
          <Typography variant="h3" gutterBottom>
            Dashboard
          </Typography>
          <DashboardOverview />
        </Box>
      </PageContainer>
    </AdminLayout>
  );
};

export default DashboardPage;
