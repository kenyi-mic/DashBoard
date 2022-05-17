import React from 'react'
import './sidebar.scss'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Hyper Dashboard</span>
           
        </div>
        <hr className="ruler"/>
        <div className="center">
            <ul>
                <li>DashBord</li>
                <li>DashBord</li>
                <li>DashBord</li>
                <li>DashBord</li>
            </ul>
        </div>
        <div className="bottom">
            Color pallete
        </div>
    </div>
  )
}

export default Sidebar