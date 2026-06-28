import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./components/App";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(elem).render(app);
