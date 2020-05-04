import React, { useState } from "react";
import "./Input.scss";

export const Input = ({
  isPassword = false,
  onChange,
  placeholder,
  label,
  title
}) => {
  let [value, valueSet] = useState("");

  const handleChange = ({ target: { value } }) => {
    valueSet(value);
    onChange && onChange(value);
  };

  return (
    <div title={title || label || ""} className="input flex-row">
      {label && <span>{label}</span>}
      <input
        type={isPassword ? "password" : "text"}
        onChange={handleChange}
        value={value}
        placeholder={isPassword ? "" : placeholder}
      />
    </div>
  );
};
