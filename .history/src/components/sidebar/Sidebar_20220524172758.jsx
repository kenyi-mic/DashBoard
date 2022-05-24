import React from "react";
import "./sidebar.scss";
import {
  Dashboard,
  Person,
  Store,
  LocalShipping,
  Payment,
  InsertChart,
  NotificationsNone,
  SettingsSystemDaydream,
  Psychology,
  Settings,
  AccountCircleOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Hyper Dashboard</span>
        </Link>
      </div>
      <hr className="ruler" />
      <div className="center">
        <ul className="list-group">
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>DashBord</span>
            </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <Payment className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
