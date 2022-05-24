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
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="img"></label>
                <input type="file" id="id" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
