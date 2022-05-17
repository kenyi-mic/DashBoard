import React from "react";
import "./header.scss";
import {
  Search,
  DarkModeOutlined,
  LanguageOutlined,
  FullscreenExitOutlined,
  NotificationsExitOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="search">
          <Search />
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
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item">
            <NotificationsExitOutlined />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined />
          </div>
          <div className="item">
            <ListOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
