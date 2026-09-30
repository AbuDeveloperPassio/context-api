import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StudentProvider } from "./context/StudentContext";
import { FavouriteProvider } from "./context/FavouriteContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentProvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </StudentProvider>
    </BrowserRouter>
  </React.StrictMode>
);