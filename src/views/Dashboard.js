import React from "react";
// import { GiSofa } from "react-icons/gi";

// function Customcard(name, icon, kw) {}

function Dashboard() {
  return (
    <React.Fragment>
      <div id="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div id="controls">
        <div id="temperature"></div>
        <div id="humidity"></div>
        <div id="light"></div>
      </div>
      <div id="spending">Hello</div>
    </React.Fragment>
  );
}

export default Dashboard;
