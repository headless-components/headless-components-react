import React from "react";

const Cols = [
  {
    header: "Nombre",
    accessor: "name"
  },
  {
    header: "Apellidos",
    accessor: "surname"
  },
  {
    header: "Edad",
    accessor: "age",
    cell: age => <span className={age > 50 ? "warning" : ""}>{age}</span>
  }
];

export default Cols;
