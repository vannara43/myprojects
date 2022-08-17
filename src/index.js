import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = "Development Projects";
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
