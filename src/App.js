import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search.js";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
