import React from "react";
import { getPagesArray } from "../../../utils/pages";
import classes from "./UiPagination.module.css";

const UiPagination = ({ totalPages, page, changePage }) => {
  // TODO: useMemo
  let pagesArray = getPagesArray(totalPages);

  const defaultClasses = classes.page;
  const currentClasses = [defaultClasses, classes.page__current].join(" ");

  return (
    <div className={classes.page__wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => {
            changePage(p);
          }}
          key={p}
          className={page === p ? currentClasses : defaultClasses}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default UiPagination;
