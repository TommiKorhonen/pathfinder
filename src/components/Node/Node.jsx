import React from "react";
import "./Node.css";
const Node = ({
  row,
  col,
  isStart,
  isFinish,
  isVisited,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  const extraClass = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isVisited
    ? "node-visited"
    : isWall
    ? "node-wall"
    : "";
  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClass}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
};

export default Node;
