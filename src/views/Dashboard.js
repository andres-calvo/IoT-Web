import React from "react";
import "../scss/Dashboard.scss";
// import { GiSofa } from "react-icons/gi";

// function Customcard(name, icon, kw) {}

function Dashboard() {
  return (
    <React.Fragment>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div id="temperature" className="controls">
        <div className="icon"></div>
        <div className="text">
          <span>Indoor Temperature</span>
          <p>
            <span className="up-down-zero">+</span>
            <span className="temp-value">25</span>
            <span className="temp-units">°c</span>
          </p>
        </div>
      </div>
      <div id="humidity" className="controls"></div>
      <div id="light" className="controls"></div>
      <div id="spending">Hello</div>
    </React.Fragment>
  );
}

export default Dashboard;
