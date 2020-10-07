import React from "react";
import RowBuild from "../RowBuild/RowBuild";
import employees from "../data/employees.json";
import tableColumns from "../data/tableColumns.json";
import Search from "../Search/Search";
import { MDBDataTable } from "mdbreact";

const Table = () => {
  const data = {
    columns: tableColumns,
    rows: employees,
  };

  return (
    <div className="container-fluid">
      <MDBDataTable striped bordered large data={data} hover />

    </div>
  );
};

export default Table;
