import PropTypes from "prop-types";
import React from "react";
import "./input.css";

export const Input = ({ className, text = "Email", inputType = "email" }) => {
  return <input className={`input ${className}`} placeholder={text} type={inputType} />;
};

Input.propTypes = {
  text: PropTypes.string,
  inputType: PropTypes.string,
};