"use client";
import { Avatar, Box, Typography } from "@mui/material";
import stories from "@/constants/stories";

export default function Stories() {
  return (
    <Box sx={{ display: "flex", overflowX: "auto", p: 1, borderBottom: "1px solid #eee" }}>
      {stories.map((story) => (
        <Box key={story.id} sx={{ textAlign: "center", mx: 1 }}>
          <Avatar src={story.image} sx={{ width: 56, height: 56, mx: "auto" }} />
          <Typography variant="caption">{story.username}</Typography>
        </Box>
      ))}
    </Box>
  );
}
