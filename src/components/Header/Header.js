import "./Header.css";
import logoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

/* --------------------------- create today's date -------------------------- */
const date = new Date();
const month = date.toLocaleString("default", { month: "long" });
const day = date.getDate();
const formattedDate = `${month} ${day}, New York`;
/* -------------------------------------------------------------------------- */

const Header = ({ onCreateModal }) => {
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
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__avatar-button"
            type="text"
            onClick={onCreateModal}
          >
            +Add Clothes
          </button>
        </div>
        <Link to="/profile" className="header__avatar-name">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
