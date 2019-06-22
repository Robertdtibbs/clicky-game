import React from "react";
import "./style.css";

function Instruction(props) {
  return <h3 className="instruction">{props.children}</h3>;
}

export default Instruction;