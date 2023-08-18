import React from "react";
import "./SideBar.css";
import avatarImage from "../../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={avatarImage} alt="avatar" className="sidebar__avatar-image" />
      <h3 className="sidebar__avatar-name">Terrence Tegegne</h3>
    </div>
  );
};

export default SideBar;
