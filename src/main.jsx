import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Shop />
    </StrictMode>,
);
