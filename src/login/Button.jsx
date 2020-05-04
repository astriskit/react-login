import React from "react";
import "./Button.scss";

export const Button = ({
  className = "",
  onClick,
  disabled = false,
  children
}) => (
  <div
    className={`button ${className} ${disabled && "disabled"}`}
    onClick={onClick}
  >
    {children}
  </div>
);
