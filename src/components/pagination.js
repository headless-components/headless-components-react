import React from "react";

import { usePagination } from "./usePagination";

function Pagination(props) {
  const { currentPage, totalPages, updatePage, rangePages } = usePagination({
    ...props
  });

  console.log("soy el rangePages", rangePages);

  const range = rangePages.length;

  function prevValue(num) {
    return num > 1 ? num - 1 : num;
  }

  function nextValue(num) {
    return num <= totalPages - 1 ? num + 1 : num;
  }

  console.log(range);

  return (
    <div>
      <ul className="pagination-menu">
        <li className="pagination-item">
          <a href="#" onClick={() => updatePage(prevValue(currentPage))}>
            Prev
          </a>
        </li>
        <li>
          <ul className="pagination-inner">
            {/* si currentPage > 1 pinto el primer*/}
            {/* si currentPage > window pinto dots */}
            {currentPage > range - 1 && (
              <li
                className={
                  currentPage === 1
                    ? "pagination-item active"
                    : "pagination-item"
                }
              >
                <a href="#" onClick={() => updatePage(1)}>
                  1
                </a>
              </li>
            )}

            {currentPage > range && (
              <li
                className={
                  currentPage === 1
                    ? "pagination-item active"
                    : "pagination-item"
                }
              >
                ...
              </li>
            )}

            {rangePages.map(page => {
              return (
                <li
                  className={
                    currentPage === page
                      ? "pagination-item active"
                      : "pagination-item"
                  }
                  key={page}
                >
                  <a href="#" onClick={() => updatePage(page)}>
                    {page}
                  </a>
                </li>
              );
            })}

            {currentPage < totalPages - range + 1 && (
              <li
                className={
                  currentPage === 1
                    ? "pagination-item active"
                    : "pagination-item"
                }
              >
                ...
              </li>
            )}

            {currentPage <= totalPages - range + 1 && (
              <li
                className={
                  currentPage === totalPages
                    ? "pagination-item active"
                    : "pagination-item"
                }
              >
                <a href="#" onClick={() => updatePage(totalPages)}>
                  {totalPages}
                </a>
              </li>
            )}
          </ul>
        </li>
        <li className="pagination-item">
          <a href="#" onClick={() => updatePage(nextValue(currentPage))}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
