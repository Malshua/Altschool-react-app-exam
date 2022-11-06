import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        {" "}
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
