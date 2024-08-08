import React from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import "../../assets/style.css";

const LogIn = () => {
  return (
    <div className="log-in">
      <img className="image" src="/background.png" alt="Image"/>
      <div className="left">
        <div className="back">
          <img className="vector" alt="Vector" src="/vector.png" />
          <div className="text-wrapper">Back to website</div>
        </div>
        <div className="logo">
          <img className="img" alt="Logo" src="/logo.png" />
        </div>
      </div>
      <div className="right">
        <div className="form-outer">
          <div className="div">Login</div>
          <p className="p">Please fill out your details</p>
          <div className="form">
            <Input className="input-instance" />
            <Input className="input-instance" text="Password" />
            <div className="spacer" />
            <Button className="button-instance" />
          </div>
          <div className="frame">
            <p className="new-here-create-an">
              <span className="span">New here? </span>
              <span className="text-wrapper-2">Create an account</span>
            </p>
            <p className="forgot-your-password">
              <span className="span">Forgot your password? </span>
              <span className="text-wrapper-2">Click here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn