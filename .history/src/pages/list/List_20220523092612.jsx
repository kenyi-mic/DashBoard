import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./list.scss";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Header />
      </div>
    </div>
  );
}

export default List;
