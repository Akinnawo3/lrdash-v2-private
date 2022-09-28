import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: move scss to individual pages
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./assets/scss/index.scss";
// import "./assets/scss/auth.scss";
// import "./assets/scss/business.scss";
// import "./assets/scss/pages.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
