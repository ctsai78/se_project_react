import "./Header.css";
import logoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";
/* --------------------------- create today's date -------------------------- */
const date = new Date();
const month = date.toLocaleString("default", { month: "long" });
const day = date.getDate();
const formattedDate = `${month} ${day}, New York`;
/* -------------------------------------------------------------------------- */

const Header = ({ onCreateModal, onSignUpModal, onLogInModal, loggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logoImage} alt="logo" />
          </Link>
        </div>
        <div className="header__logo-date">{formattedDate}</div>
      </div>
      <div className="header__logo-info">
        <ToggleSwitch />
        {loggedIn ? (
          <div className="header__avatar-logo">
            <button
              className="header__avatar-button"
              type="text"
              onClick={onCreateModal}
            >
              +Add Clothes
            </button>
            <Link to="/profile" className="header__avatar-name">
              {/* ${currentUser.name}  */}
              Terrence Tegegne
            </Link>

            <img src={avatarImage} alt="avatar" />
            {/* <img src={currentUser.avatar} alt="avatar" /> */}
          </div>
        ) : (
          <div>
            <button onClick={onSignUpModal}>Sign Up</button>
            <button onClick={onLogInModal}>Log In</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
