import React from "react";
import "../scss/SidebarRight.scss";
import dashImage from "../img/dashimage.png";
import { GiWifiRouter, GiMusicSpell, GiFlexibleLamp } from "react-icons/gi";
import { FiWind, FiMessageCircle, FiBell } from "react-icons/fi";
import { FcAssistant } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
function RightSidebar() {
  return (
    <div className="sidebar sidebar-right">
      <div className="profile">
        <div className="profile-picture">
          <FiMessageCircle className="profile-icons" />
          <div className="picture">
            <FcAssistant />
          </div>
          <FiBell className="profile-icons" />
        </div>
        <span>Welcome Buddy</span>
        <div className="myDevices">
          <div className="top">
            <h5>My Devices</h5>
            <BsThreeDots color="#6A7E8E" />
          </div>
          <div className="device device-AC">
            <FiWind size="2em" />
            <span>AC</span>
          </div>

          <div className="device device-Router">
            <GiWifiRouter size="2em" />
            <span>Router</span>
          </div>
          <div className="device device-Music">
            <GiMusicSpell size="2em" />
            <span>Music System</span>
          </div>
          <div className="device device-Lamps">
            <GiFlexibleLamp size="2em" />
            <span>Lamps</span>
          </div>
        </div>
      </div>
      <img src={dashImage} alt="relax on sofa" className="img-bottom"></img>
    </div>
  );
}

export default RightSidebar;
