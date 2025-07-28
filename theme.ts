// theme.ts
"use client"
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
