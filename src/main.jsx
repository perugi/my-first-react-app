import React from "react";
import ReactDOM from "react-dom/client";
// import Greeting from "./Greeting.jsx";
// import App from "./App.jsx";
// import Bio from "./Bio.jsx";
import "./index.css";
import TodoList from "./TodoList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
