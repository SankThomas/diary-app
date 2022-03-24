import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { EntriesContextProvider } from "./context/context"

ReactDOM.render(
  <React.StrictMode>
    <EntriesContextProvider>
      <App />
    </EntriesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
