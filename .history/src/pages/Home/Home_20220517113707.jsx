import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Header />
        container
      </div>
    </div>
  );
}

export default Home;
