// components/ChatWindow.tsx
"use client";
import { Box, Avatar, Typography, TextField, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { chats } from "@/constants/messages";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ChatWindow() {
  const { id } = useParams();
  const chat = chats.find((c) => c.id.toString() === id);
  const [message, setMessage] = useState("");

  if (!chat) return <Typography p={2}>Chat not found.</Typography>;

  return (
    <Box p={2}>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Avatar src={chat.avatar} />
        <Typography variant="h6">{chat.name}</Typography>
      </Stack>

      <Box sx={{ minHeight: 300, maxHeight: 400, overflowY: "auto", mb: 2 }}>
        {chat.messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: msg.fromMe ? "flex-end" : "flex-start",
              mb: 1,
            }}
          >
            <Box
              sx={{
                bgcolor: msg.fromMe ? "#1976d2" : "#eee",
                color: msg.fromMe ? "#fff" : "#000",
                p: 1,
                borderRadius: 2,
                maxWidth: "70%",
              }}
            >
              {msg.text}
            </Box>
          </Box>
        ))}
      </Box>

      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
