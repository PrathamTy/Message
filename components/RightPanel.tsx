"use client";
import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import users from "@/constants/users";

export default function RightPanel() {
  return (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
        Suggestions For You
      </Typography>
      <Stack spacing={2}>
        {users.map((user) => (
          <Box key={user.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={user.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
              <Typography variant="body2">{user.username}</Typography>
            </Box>
            <Button size="small" variant="text" sx={{ textTransform: "none", fontWeight: "bold" }}>
              Follow
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
