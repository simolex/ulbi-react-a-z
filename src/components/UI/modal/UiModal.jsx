import React from "react";
import classes from "./UiModal.module.css";

const UiModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.uiModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.uiModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default UiModal;
