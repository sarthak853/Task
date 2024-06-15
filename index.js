import React from "react";
import ReactDom from "react-dom";
import Calculator from "./Calculator";

ReactDom.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
);