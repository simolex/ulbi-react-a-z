import React from "react";
import classes from "./UiButton.module.css";

const UiButton = ({ children, ...props }) => {
  return (
    <button className={classes.uiBtn} {...props}>
      {children}
    </button>
  );
};

export default UiButton;
