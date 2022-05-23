import React from "react";
import "./single.scss";

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
