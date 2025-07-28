"use client";
import { Box, Stack } from "@mui/material";
import Stories from "./Stories";
import Post from "./Post";
import posts from "@/constants/posts";

export default function Feed() {
  return (
    <Box maxWidth="100%">
      <Stories />
      <Stack spacing={4} mt={2}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Stack>
    </Box>
  );
}
