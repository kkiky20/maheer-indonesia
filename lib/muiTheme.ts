import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B0082",
      light: "#6B21A8",
      dark: "#2D0057",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A855F7",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "var(--font-poppins), sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 24px",
        },
      },
    },
  },
});

export default theme;
