import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
