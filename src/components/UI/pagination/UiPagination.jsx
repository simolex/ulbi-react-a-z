import React from "react";
import classes from "./UiPagination.module.css";

const UiPagination = () => {
  return (
    <div className={classes.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => {
            changePage(p);
          }}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default UiPagination;
