import React from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import employees from "../data/employees.json";
import tableColumns from "../data/tableColumns.json";
import Search from "../SearchForm/SearchForm";
import { MDBDataTable } from "mdbreact";

const Table = () => {
  const data = {
    columns: tableColumns,
    rows: employees,
  };

  // Pulling in the data with the library syntax
  return (
    <div className="container-fluid">
      <MDBDataTable striped bordered large data={data} hover />

    </div>
  );
};

export default Table;
