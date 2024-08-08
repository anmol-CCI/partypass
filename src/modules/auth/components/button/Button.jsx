import React from "react";
import "./button.css";

export const Button = ({ className }) => {
  return (
    <button className={`button ${className}`}>
      <div className="continue">CONTINUE</div>
    </button>
  );
};