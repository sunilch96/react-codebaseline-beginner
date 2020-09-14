import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//React Element 1

//const element1 = <h1>Welcome To codebaseline tutorials..</h1>;
//ReactDOM.render(element1, document.getElementById("root"));

//const element1 = <h1>A simple header text</h1>;
//ReactDOM.render(element2, document.getElementById("root2"));

// const element3 = (
//   <div>
//     <h1>Welcome To codebaseline tutorials..</h1>
//     <h1>A simple header text</h1>
//   </div>
// );
// ReactDOM.render(element3, document.getElementById("root"));

//React Element 2
const reactElement = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "This elements is created by react."),
  React.createElement("h1", null, "Second Div.")
);
ReactDOM.render(reactElement, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
