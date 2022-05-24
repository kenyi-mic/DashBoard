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
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="" alt="" className="itemImg" />
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Single;
