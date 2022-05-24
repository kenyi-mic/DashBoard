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
              <div className="formInput">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="eg. kenyi" />
              </div>
              <div className="formInput">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="eg. Michael Kenyi"
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg. kenyi@gmail.com"
                />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  id="phone"
                  placeholder="eg. +1 123 456 789"
                />
              </div>
              <div className="formInput">
                <label htmlFor="password">Username</label>
                <input type="password" id="password" />
              </div>
              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="231/33 st. 17 Chicago"
                />
              </div>
              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="USA" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
