import { useState, useEffect } from "react";

const usePagination = ({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
  window
}) => {
  // calculate total pages and save it
  const [pages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));

  // if totalItems or itemsPerPage change, recalculate totalPages
  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  // ensure current page isn't out of range
  if (initialPage < 1) {
    initialPage = 1;
  } else if (initialPage > pages) {
    initialPage = pages;
  }

  // store the active page
  const [active, setActive] = useState(initialPage);

  let startPage, endPage;

  if (pages <= window) {
    startPage = 1;
    endPage = pages;
    console.log("entrooo 0");
  } else {
    console.log("entrooo 1");
    // total pages more than max so calculate start and end pages
    let maxPagesBeforeCurrentPage = Math.floor(window / 2);
    let maxPagesAfterCurrentPage = Math.ceil(window / 2) - 1;

    console.log("soy el maxPagesBeforeCurrentPage", maxPagesBeforeCurrentPage);
    console.log("soy el maxPagesAfterCurrentPage", maxPagesAfterCurrentPage);

    if (active <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = window;
    } else if (active + maxPagesAfterCurrentPage >= pages) {
      // current page near the end
      startPage = pages - window + 1;
      endPage = pages;
    } else {
      // current page somewhere in the middle
      startPage = active - maxPagesBeforeCurrentPage;
      endPage = active + maxPagesAfterCurrentPage;
    }
  }

  // create an array of pages to show
  let range = Array.from(Array(endPage + 1 - startPage).keys()).map(
    i => startPage + i
  );

  console.log("range", range);

  return {
    currentPage: active,
    updatePage: setActive,
    rangePages: range,
    totalPages: pages
  };
};

export { usePagination };
