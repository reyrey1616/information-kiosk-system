import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
if (process.env.NODE_ENV === "development") {
  // axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.baseURL = "https://information-kiosk-api.herokuapp.com/";
} else {
  axios.defaults.baseURL = "https://information-kiosk-api.herokuapp.com/";
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
