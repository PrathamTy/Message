"use client";

import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "@/types/Post";

export default function PostComponent({ id, username, avatar, image, caption }: PostType) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Link href={`/messages/${id}`} style={{ textDecoration: "none" }}>
            <Avatar src={avatar} />
          </Link>
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          <Link href={`/messages/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography fontWeight="bold">{username}</Typography>
          </Link>
        }
      />
      <Box sx={{ position: "relative", width: "100%", height: 400 }}>
        <Image src={image} alt="post image" fill style={{ objectFit: "cover" }} />
      </Box>
      <CardContent>
        <Typography variant="body2">
          <strong>{username}</strong> {caption}
        </Typography>
      </CardContent>
    </Card>
  );
}
