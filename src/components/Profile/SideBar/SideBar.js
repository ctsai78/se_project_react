import React from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ onEditProfile, onLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  const avatarImage = currentUser.avatarUrl;

  return (
    <section className="sidebar">
      <div className="sidebar__user-info">
        <img
          src={avatarImage}
          alt="avatar image"
          className="sidebar__avatar-image"
        />
        <h3 className="sidebar__avatar-name">{currentUser.name}</h3>
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
