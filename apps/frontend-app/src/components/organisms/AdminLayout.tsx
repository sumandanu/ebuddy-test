"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Box, Container, styled } from "@mui/material";
import Header from "../organisms/header/Header";

interface Props {
  children: React.ReactNode;
}

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

export default function AdminLayout({ children }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users to the sign-in page
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (!session) {
    return null;
  }

  return (
    <MainWrapper className="mainwrapper">
      <Sidebar
        isSidebarOpen={true}
        isMobileSidebarOpen={true}
        onSidebarClose={() => console.log(false)}
      />
      <PageWrapper className="page-wrapper">
        <Header toggleMobileSidebar={() => console.log(true)} />
        <Container
          sx={{
            paddingTop: "20px",
            maxWidth: "1200px",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}
