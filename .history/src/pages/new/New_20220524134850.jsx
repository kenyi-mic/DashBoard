import React from "react";
import "./new.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Header />
      </div>
    </div>
  );
};

export default New;
