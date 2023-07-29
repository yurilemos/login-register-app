import React from "react";
import "./styles.css"

const Button = ({ children, onClick, type="button", style }) => {
  return (
    <button type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
