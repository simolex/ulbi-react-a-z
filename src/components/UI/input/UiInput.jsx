import React from "react";
import classes from "./UiInput.module.css";

const UiInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.uiInput} />;
});

export default UiInput;
