import React from "react";
import "./single.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Header } from "../../components/Header/Header";

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
