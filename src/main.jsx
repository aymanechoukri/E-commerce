import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App.jsx";
import MenuSide from "./Context/MenuSide.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuSide>
      <App />
    </MenuSide>
  </StrictMode>
);
