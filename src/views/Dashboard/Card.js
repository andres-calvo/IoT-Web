import React from "react";
import "./Card.scss";
import { BsThreeDots } from "react-icons/bs";
function Card({ title, icon, value }) {
  return (
    <div className="card">
      <div className="card-top">
        <h5>{title}</h5>
        <BsThreeDots color="#6A7E8E" />
      </div>
      <div className="card-body">
        <div className="card-image">{icon}</div>
        <div className="card-text">
          <h3 className="value">{value}</h3>
          <span className="value-units">kWh</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
