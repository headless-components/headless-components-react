import { useState } from "react";
import Cols from "../sampleData/Cols";

function useTable(data, cols) {
  const [sortAccessor, setAccessor] = useState({ key: null, direction: "asc" });

  function getHeaders(cols) {
    return cols.map(col => {
      return { labels: col.header, accessor: col.accessor };
    });
  }

  function sortHandler(a, b) {
    const { key, direction } = sortAccessor;
    if (sortAccessor.key != null) {
      if (typeof a[key] === "number" && typeof b[key] === "number") {
        return direction === "desc" ? b[key] - a[key] : a[key] - b[key];
      } else {
        return direction === "desc"
          ? b[key].localeCompare(a[key])
          : a[key].localeCompare(b[key]);
      }
    }
  }

  /* Transformamos los datos para meter dentro de las rows la función de las cells, 
para esto recorremos Cols, de cada col, si existe col.cell, devolvemos col.cell(row[col.accessor]) */

  let base = [...data];

  if (sortAccessor) {
    base = base.sort(sortHandler);
  }

  base = base.map(row => {
    return Cols.map(col =>
      col.cell ? col.cell(row[col.accessor]) : row[col.accessor]
    );
  });

  const table = {
    headers: getHeaders(cols),
    rows: base
  };

  return {
    table,
    sort: (key, direction) => setAccessor({ key, direction }),
    sortedby: sortAccessor
  };
}

export default useTable;
