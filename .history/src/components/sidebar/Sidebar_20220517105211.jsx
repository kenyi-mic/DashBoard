import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";

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
            <DashboardIcon />
            <span>Stats</span>
          </li>
          <li>
            <DashboardIcon />
            <span>Notifications</span>
          </li>
          <li>
            <DashboardIcon />
            <span>System Health</span>
          </li>
          <li>
            <DashboardIcon />
            <span>Logs</span>
          </li>
          <li>
            <DashboardIcon />
            <span>Settings</span>
          </li>
          <li>
            <DashboardIcon />
            <span>Profile</span>
          </li>
          <li>
            <DashboardIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color pallete</div>
    </div>
  );
}

export default Sidebar;
