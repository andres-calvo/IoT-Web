import React from "react";
import dashImage from "../img/dashimage.png";

function RightSidebar() {
  return (
    <div className="sidebar sidebar-right">
      <div className="profile"></div>
      <img src={dashImage} alt="relax on sofa" className="img-bottom"></img>
    </div>
  );
}

export default RightSidebar;
