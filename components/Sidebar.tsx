"use client";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box width={250} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Typography variant="h6" fontWeight={600}>Instagram</Typography>
      <List>
        {["Home", "Search", "Explore", "Reels", "Messages", "Notifications", "Create", "Profile"].map((item) => (
          <ListItem key={item} disablePadding sx={{ py: 1 }}>
            <Typography>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
