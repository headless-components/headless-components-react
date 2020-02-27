import React from "react";

import {usePagination} from '../../hc-hooks/usePagination/usePagination';
import './pagination.css';

function UiPagination(props) {
  const { currentPage, totalPages, updatePage, rangePages } = usePagination({
    ...props
  });

  const range = rangePages.length;

  function prevValue(num) {
    return num > 1 ? num - 1 : num;
  }

  function nextValue(num) {
    return num <= totalPages - 1 ? num + 1 : num;
  }

  return (
    <div>
      <h4>Pagination using <code>usePagination</code></h4>
      <ul className="pagination-menu">
        <li className="pagination-item">
          <a href="#prev" className="pagination-item-inner" onClick={() => updatePage(prevValue(currentPage))}>
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
                <a href="#first" className="pagination-item-inner" onClick={() => updatePage(1)}>
                  1
                </a>
              </li>
            )}

            {currentPage > range && (
              <li
                className={
                  currentPage === 1
                    ? "pagination-item pagination-item-inner active"
                    : "pagination-item pagination-item-inner"
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
                  <a href={`#page`} className="pagination-item-inner" onClick={() => updatePage(page)}>
                    {page}
                  </a>
                </li>
              );
            })}

            {currentPage < totalPages - range + 1 && (
              <li
                className={
                  currentPage === 1
                    ? "pagination-item pagination-item-inner active"
                    : "pagination-item pagination-item-inner"
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
                <a href="#last" className="pagination-item-inner" onClick={() => updatePage(totalPages)}>
                  {totalPages}
                </a>
              </li>
            )}
          </ul>
        </li>
        <li className="pagination-item">
          <a href="#next" className="pagination-item-inner" onClick={() => updatePage(nextValue(currentPage))}>
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default UiPagination;
