import React from "react";
import Rows from "../data/Rows";
import Cols from "../data/Cols";

import useTable from "./UseTable.js";

function Table() {
  const { table, sort, sortedby } = useTable(Rows, Cols);
  console.log(table);

  return (
    <table>
      {table.headers && (
        <thead>
          <tr>
            {table.headers.map(item => (
              <th
                onClick={() =>
                  sort(
                    item.accessor,
                    sortedby.direction === "asc" ? "desc" : "asc"
                  )
                }
                key={item.labels}
              >
                {item.labels}
              </th>
            ))}
          </tr>
        </thead>
      )}

      {table.rows && (
        <tbody>
          {table.rows.map((row, index) => (
            <tr key={index}>
              {row.map(col => (
                <td key={col}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default Table;
