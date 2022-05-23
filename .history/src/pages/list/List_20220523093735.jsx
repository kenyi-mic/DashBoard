import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import "./list.scss";
import { Datatable } from "../../components/datatable/Datatable";

function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Header />
        <Datatable />
      </div>
    </div>
  );
}

export default List;
