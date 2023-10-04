import React from "react";
import "./SideBar.css";
import avatarImage from "../../../images/avatar.svg";

function SideBar({ onEditProfile, onLogOut }) {
  return (
    <section className="sidebar">
      <div className="sidebar__user-info">
        <img
          src={avatarImage}
          alt="avatar image"
          className="sidebar__avatar-image"
        />
        <h3 className="sidebar__avatar-name">Terrence Tegegne</h3>
      </div>
      <h3 className="sidebar__options" onClick={onEditProfile}>
        Change profile data
      </h3>
      <h3 className="sidebar__options" onClick={onLogOut}>
        Log out
      </h3>
    </section>
  );
}

export default SideBar;
