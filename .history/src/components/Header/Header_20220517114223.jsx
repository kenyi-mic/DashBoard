import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="search">
          <SearchIcon />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
