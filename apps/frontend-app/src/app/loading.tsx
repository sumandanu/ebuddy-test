"use client";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";

export default function Loading() {
  const { status } = useSession();
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={status === "loading"}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
