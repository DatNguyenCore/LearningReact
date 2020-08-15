import React from "react";
import ReactDOM from "react-dom";

// const reactElement = <h1 className='title'>Hello world</h1>;

const reactElement = React.createElement(
  "h1",
  { className: "title" },
  "Hello world"
);
console.log(reactElement);

ReactDOM.render(reactElement, document.getElementById("root"));
