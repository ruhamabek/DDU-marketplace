import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Providers } from "./Providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Providers>
        <AppRoutes />
      </Providers>
    </Router>
  </StrictMode>
);
