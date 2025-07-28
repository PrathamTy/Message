"use client";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";

type Message = {
  id: string;
  content: string;
  sender: "me" | "them";
  timestamp: string;
};

export type User = {
  id: number;
  name: string;
  username?: string;
  avatar: string;
};


type Props = {
  selectedUser: User;
};

export default function ChatBox({ selectedUser }: Props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "me",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
    }));

    setInput("");
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box
        flexGrow={1}
        p={2}
        sx={{ overflowY: "auto", background: "#f9f9f9", borderBottom: "1px solid #ddd" }}
      >
        {(messages[selectedUser.id] || []).map((msg) => (
          <Box
            key={msg.id}
            sx={{
              mb: 1,
              display: "flex",
              justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                background: msg.sender === "me" ? "#1976d2" : "#e0e0e0",
                color: msg.sender === "me" ? "#fff" : "#000",
                px: 2,
                py: 1,
                borderRadius: 2,
                maxWidth: "70%",
              }}
            >
              {msg.content}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Input */}
      <Box p={2} sx={{ borderTop: "1px solid #ddd" }}>
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder={`Message ${selectedUser.username}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
