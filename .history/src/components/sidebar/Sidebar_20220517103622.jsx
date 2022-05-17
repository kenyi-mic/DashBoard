import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Hyper Dashboard</span>
           
        </div>
        <hr className="ruler"/>
        <div className="center">
            <ul className="list-group">
                <li>
                <DashboardIcon/>
                    <span>DashBord</span></li>
                    <li>
                <DashboardIcon/>
                    <span>DashBord</span></li>
                    <li>
                <DashboardIcon/>
                    <span>DashBord</span></li>
                    <li>
                <DashboardIcon/>
                    <span>DashBord</span></li>
            </ul>
        </div>
        <div className="bottom">
            Color pallete
        </div>
    </div>
  )
}

export default Sidebar