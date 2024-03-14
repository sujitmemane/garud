import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";
import AppContextProvider from "./context/AppContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <Toaster />
    </AppContextProvider>
  </React.StrictMode>
);
