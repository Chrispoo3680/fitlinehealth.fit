import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Provider from "@components/Provider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
