import React from "react";
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
        <NavLink activeClassName="tab-active" classname="tab" to="/">
          <BiTachometer /> <span>Dashboard</span>
        </NavLink>
        <NavLink activeClassName="tab-active" classname="tab" to="/rooms">
          <BiHome /> <span>Rooms</span>
        </NavLink>
        <NavLink activeClassName="tab-active" classname="tab" to="/devices">
          <BiDevices /> <span>Devices</span>
        </NavLink>
        <NavLink activeClassName="tab-active" classname="tab" to="/security">
          <BiShield /> <span>Security</span>
        </NavLink>
        <NavLink activeClassName="tab-active" classname="tab" to="/statistics">
          <BiBarChart /> <span>Statistics</span>
        </NavLink>
        <NavLink activeClassName="tab-active" classname="tab" to="/members">
          <BiUser /> <span>Members</span>
        </NavLink>
        <NavLink className="logout" to="/logout">
          <BiPowerOff /> <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftSidebar;
