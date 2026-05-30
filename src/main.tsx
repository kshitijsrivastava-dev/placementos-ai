import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@/features/auth/auth-provider";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);