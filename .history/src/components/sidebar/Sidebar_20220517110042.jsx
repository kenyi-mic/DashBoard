import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Hyper Dashboard</span>
      </div>
      <hr className="ruler" />
      <div className="center">
        <ul className="list-group">
          <li>
            <DashboardIcon />
            <span>DashBord</span>
          </li>
          <li>
            <PersonIcon />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon />
            <span>Products</span>
          </li>
          <li>
            <PaymentIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <InsertChartIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color pallete</div>
    </div>
  );
}

export default Sidebar;
