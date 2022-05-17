import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import { DarkModeOutlined, LanguageOutlined } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="search">
          <SearchIcon />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
          <div className="item">
            <DarkModeOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
