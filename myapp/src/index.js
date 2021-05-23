import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
