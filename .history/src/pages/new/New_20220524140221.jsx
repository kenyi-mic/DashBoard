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
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
      </div>
    </div>
  );
};

export default New;
