// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { CssBaseline, ThemeProvider, Container, Box } from "@mui/material";
import Header from "@/components/Header";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram UI Clone",
  description: "A responsive Instagram-style clone using MUI + Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container maxWidth="md">
            <Box mt={2}>{children}</Box>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
