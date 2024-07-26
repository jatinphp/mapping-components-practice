import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

function square(x) {
  return x * x;
}
var numbers = [2, 8, 54, 45, 21];

const newNumbers = numbers.map((x) => x * x);
console.log(newNumbers);

const newNumbers2 = numbers.filter((x) => x > 10);
console.log(newNumbers2);

const newNumbers3 = numbers.reduce((x, y) => x + y);
console.log(newNumbers3);
