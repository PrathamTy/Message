"use client";

import { Box, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/navigation";

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 250,
        borderRight: "1px solid #ddd",
        p: 2,
        height: "100vh",
        position: "sticky",
        top: 0,
        bgcolor: "#fff",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 4, cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        Instagram
      </Typography>

      <Stack spacing={3}>
        <Box
          onClick={() => router.push("/")}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: "text.primary",
          }}
        >
          <HomeIcon sx={{ mr: 1 }} />
          <Typography>Home</Typography>
        </Box>

        <Box
          onClick={() => router.push("/message")}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: "text.primary",
          }}
        >
          <SendIcon sx={{ mr: 1 }} />
          <Typography>Messages</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
