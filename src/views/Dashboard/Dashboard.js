import React from "react";
import "./Dashboard.scss";
import Card from "./Card";
import { GiSofa } from "react-icons/gi";
import { IoBed, IoLibrary } from "react-icons/io5";
import { MdKitchen } from "react-icons/md";
import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function Dashboard() {
  return (
    <React.Fragment>
      <Card title="Living Room" icon={<GiSofa />} value="174" />
      <Card title="Bedroom" icon={<IoBed />} value="196" />
      <Card title="Study Room" icon={<IoLibrary />} value="289" />
      <Card title="Kitchen" icon={<MdKitchen />} value="201" />
      <div id="temperature" className="controls">
        <div className="icon">
          <FaThermometerHalf size="2em" color="#6A7E8E" />
        </div>
        <div className="text">
          <h5>Indoor Temperature</h5>
          <p>
            <span className="up-down-zero">+</span>
            <span className="temp-value">25</span>
            <span className="temp-units">°c</span>
          </p>
        </div>
      </div>
      <div id="humidity" className="controls">
        <div className="icon">
          <WiHumidity size="2em" color="#6A7E8E" />
        </div>
        <div className="text">
          <h5>Humidity</h5>
          <p>
            <span className="humidity-value">25</span>
            <span className="humidity-units">%</span>
          </p>
        </div>
      </div>
      <div id="light" className="controls"></div>
      <div id="spending">Hello</div>
    </React.Fragment>
  );
}

export default Dashboard;
