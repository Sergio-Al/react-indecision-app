// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <h1>page title</h1>
    <p>This is my page</p>
  </Layout>,
  document.getElementById("app")
);
