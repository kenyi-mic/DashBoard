import React, { useContext } from "react";
import "./header.scss";
import {
  Search,
  DarkModeOutlined,
  LanguageOutlined,
  FullscreenExitOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";

function Header() {
  const { dispatch } = useContext(DarkModeContext);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="header">
      <div className="wrapper">
        <div className="search">
          <input type="text" className="searchInput" placeholder="Search" />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            {darkMode ? DarkModeOutlined : LightModeOutlined}
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="./image/mike.png" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
