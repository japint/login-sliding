import React from "react";
import classes from "./Button.module.css";

const Button = ({ color = "primary", children, onClick, icon }) => {
  return (
    <button
      className={
        `${classes.btn} ` +
        `${color === "primary" ? classes.primary : ""} ` +
        `${color === "secondary" ? classes.secondary : ""} ` +
        `${color === "info" ? classes.info : ""}`
      }
      onClick={onClick}
    >
      {icon && <img src={icon} className={classes.btnIcon} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;
