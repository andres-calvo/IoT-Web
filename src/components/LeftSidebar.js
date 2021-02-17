import React from "react";
import "../scss/SidebarLeft.scss";
import { FcHome } from "react-icons/fc";
import { BiTachometer, BiHome, BiDevices, BiShield, BiBarChart, BiUser, BiPowerOff } from "react-icons/bi";
import { NavLink } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="sidebar sidebar-left">
      <div className="logo">
        <FcHome size="3em" />
      </div>
      <div className="routes">
        <NavLink activeClassName="tab-active" className="tab" to="/" exact>
          <BiTachometer /> <span>Dashboard</span>
        </NavLink>
        <NavLink activeClassName="tab-active" className="tab" to="/rooms">
          <BiHome /> <span>Rooms</span>
        </NavLink>
        <NavLink activeClassName="tab-active" className="tab" to="/devices">
          <BiDevices /> <span>Devices</span>
        </NavLink>
        <NavLink activeClassName="tab-active" className="tab" to="/security">
          <BiShield /> <span>Security</span>
        </NavLink>
        <NavLink activeClassName="tab-active" className="tab" to="/statistics">
          <BiBarChart /> <span>Statistics</span>
        </NavLink>
        <NavLink activeClassName="tab-active" className="tab" to="/members">
          <BiUser /> <span>Members</span>
        </NavLink>
        <NavLink className="tab logout" to="/logout">
          <BiPowerOff /> <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftSidebar;
