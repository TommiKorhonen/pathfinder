import React from "react";
import "./Node.css";
const Node = ({ row, col, isStart, isFinish, isVisited }) => {
  const extraClass = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isVisited
    ? "node-visited"
    : "";
  return <div id={`node-${row}-${col}`} className={`node ${extraClass}`}></div>;
};

export default Node;
