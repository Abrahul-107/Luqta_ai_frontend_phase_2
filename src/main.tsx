import { createRoot } from "react-dom/client";
import "./index.css";
import "../i18n"; // 🔥 MUST be first or near top
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
