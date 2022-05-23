import React from "react";
import "./single.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Header } from "../../components/header/Header";

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
