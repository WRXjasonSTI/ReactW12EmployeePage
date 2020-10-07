import React from "react";

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid ">
        <div className="container">
          <h2 className="display-4 text-center">W19 React Directory</h1>
          <h5>
            {" "}
            Table Columns can be sorted by clicking the header
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
