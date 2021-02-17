import React from "react";
import "./Dashboard.scss";
import Card from "./Card";
import { GiSofa } from "react-icons/gi";

// function Customcard(name, icon, kw) {}

function Dashboard() {
  return (
    <React.Fragment>
      <Card title="Living Room" icon={<GiSofa />} value="174" />
      <Card title="Bedroom" icon={<GiSofa />} value="196" />
      <Card title="Study Room" icon={<GiSofa />} value="289" />
      <Card title="Kitchen" icon={<GiSofa />} value="201" />
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
