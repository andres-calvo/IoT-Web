import React from "react";
import "../scss/Header.scss";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <React.Fragment>
      <div id="search">
        <input type="text" name="" placeholder="Search" />
        <BiSearch />
      </div>
      <div id="date">
        <span>
          <strong>Monday,</strong> 15 February 2021
        </span>
      </div>
    </React.Fragment>
  );
}

export default Header;
