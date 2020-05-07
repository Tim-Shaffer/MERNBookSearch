import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <button className="btn view-btn" {...props}>
      <a target="_blank" href={props.href} rel="noopener">View</a>
    </button>
  );
}

export default ViewBtn;
