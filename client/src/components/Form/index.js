import React from "react";

export function Input(props) {
  return (
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>);
}

export function FormBtn(props) {
  return (
  <button {...props} style={{ float: "right" }} className="btn btn-info">
    {props.children}
  </button>);
}

