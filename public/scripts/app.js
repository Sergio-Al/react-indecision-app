"use strict";

// logic for our program
var isVisible = false;

var changeVisibility = function changeVisibility() {
  isVisible = !isVisible;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: changeVisibility },
      isVisible ? "Hide Details" : "Show Details"
    ),
    isVisible && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "this is my details"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();