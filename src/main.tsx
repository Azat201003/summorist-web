import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const elem = document.getElementById("root")!;
const app = (
  <BrowserRouter>
	<StrictMode>
	<App />
	</StrictMode>
  </BrowserRouter>
);

createRoot(elem).render(app);
