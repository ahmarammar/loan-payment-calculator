import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import Router from "./services/router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
