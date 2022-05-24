import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import BasicTable from "../../components/table/BasicTable";
import Widget from "../../components/widget/Widget";

import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Header />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2.2} title={`LAST 6 MONTHS (Revenue)`} />
        </div>
        <div className="listContainer">
          <div className="listTItle">Latest Transactions</div>
          <BasicTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
