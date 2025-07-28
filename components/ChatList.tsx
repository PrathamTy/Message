// components/ChatList.tsx
"use client";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { chats } from "@/constants/messages";

export default function ChatList() {
  const router = useRouter();

  return (
    <Box>
      <Typography variant="h6" p={2}>
        Messages
      </Typography>
      <List>
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            button
            onClick={() => router.push(`/messages/${chat.id}`)}
          >
            <ListItemAvatar>
              <Avatar src={chat.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={chat.lastMessage}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
