// constants/messages.ts

export const chats = [
  {
    id: 1,
    name: "john_doe",
    avatar: "https://i.pravatar.cc/150?img=11",
    lastMessage: "Hey, how's it going?",
    messages: [
      { fromMe: false, text: "Hey, how's it going?" },
      { fromMe: true, text: "Pretty good, you?" },
      { fromMe: false, text: "Same here!" },
    ],
  },
  {
    id: 2,
    name: "emma_smith",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Let's catch up tomorrow!",
    messages: [
      { fromMe: true, text: "Let’s catch up tomorrow!" },
      { fromMe: false, text: "Sure!" },
    ],
  },
];
