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
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://avatars.githubusercontent.com/u/56795860?v=4"
                alt="michael kenyi"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Zayna Taban</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">zayn@microsoft.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
