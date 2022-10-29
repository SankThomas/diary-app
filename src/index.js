import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { EntriesContextProvider } from "./context/context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <EntriesContextProvider>
      <App />
    </EntriesContextProvider>
  </React.StrictMode>
);
