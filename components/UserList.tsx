import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Props {
  users: User[];
  selectedUser: User;
  onSelectUser: (user: User) => void;
}

export default function UserList({ users, selectedUser, onSelectUser }: Props) {
  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          button
          selected={selectedUser.id === user.id}
          onClick={() => onSelectUser(user)}
        >
          <ListItemAvatar>
            <Avatar src={user.avatar} />
          </ListItemAvatar>
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
}
