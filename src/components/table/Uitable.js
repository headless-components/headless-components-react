import React from "react";
import Rows from "../../sampleData/Rows";
import Cols from "../../sampleData/Cols";

import useTable from "../../hc-hooks/useTable/useTable";
import './table.css';

function UiTable() {
  const { table, sort, sortedby } = useTable(Rows, Cols);

  return (
    <div>
      <h4>Basic orderer table using <code>useTable</code></h4>
        <table className="table">
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
    </div>
  );
}

export default UiTable;
