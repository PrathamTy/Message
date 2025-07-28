"use client";
import { Box, Stack, Typography, Divider } from "@mui/material";
import { useState } from "react";
import UserList from "@/components/UserList";
import ChatBox from "@/components/ChatBox";

const users = [
  {
    id: 2,
    name: "Alex",
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 3,
    name: "Mira",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 4,
    name: "Dev",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        Direct Messages
      </Typography>
      <Stack direction="row" spacing={2}>
        {/* Left: User list */}
        <Box
          sx={{
            width: 250,
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <UserList
            users={users}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
          />
        </Box>

        {/* Right: Chat box */}
        <Box flex={1}>
          <ChatBox selectedUser={selectedUser} />
        </Box>
      </Stack>
    </Box>
  );
}
