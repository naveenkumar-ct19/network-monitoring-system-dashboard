import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
//import Login from "./pages/login/Login";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
        <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
