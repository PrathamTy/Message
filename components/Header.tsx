// components/Header.tsx
"use client";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";

export default function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "cursive", fontWeight: 600 }}
          >
            Instagram
        </Typography>
        </Link>
        <Box>
          {/* Add other icons/buttons here if needed */}
          <Link href="/messages">
            <IconButton>
              <SendIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
