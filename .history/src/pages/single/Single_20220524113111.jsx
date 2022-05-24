import React from "react";
import "./single.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Header />
      </div>
    </div>
  );
};

export default Single;
