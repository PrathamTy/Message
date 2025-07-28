// app/page.tsx
import { Box, Container, Stack } from "@mui/material";
import Feed from "@/components/Feed";
import RightPanel from "@/components/RightPanel";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Stack direction="row" spacing={4} py={4}>
        {/* Feed in center */}
        <Box sx={{ flex: 2 }}>
          <Feed />
        </Box>

        {/* RightPanel visible only on desktop */}
        <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
          <RightPanel />
        </Box>
      </Stack>
    </Container>
  );
}
