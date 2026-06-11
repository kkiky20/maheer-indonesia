"use client";

import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "@/store";
import theme from "@/lib/muiTheme";
import CssBaseline from "@mui/material/CssBaseline";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
