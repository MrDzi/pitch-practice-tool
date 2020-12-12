import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import "./style.scss";

const app = () => {
  // useEffect(() => {
  //   fetch("/api/test").then((response: any) => {
  //     console.log("from frontend", response);
  //   });
  // }, []);
  return <Home />;
};

const App = React.createElement(app);

ReactDOM.render(App, document.getElementById("app"));
