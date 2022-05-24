import React from "react";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import BasicTable from "../../components/table/BasicTable";

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
                <h1 className="itemTitle">Kenyi Mike</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mike@microsoft.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+880 181 245 6789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">107/455 Juba Gudele</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">South Sudan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={`User Spending (Last 6 Months)`} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
