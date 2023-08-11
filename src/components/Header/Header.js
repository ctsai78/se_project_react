import "./Header.css";
import logoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";

var date = new Date();
var month = date.toLocaleString("default", { month: "long" });
var day = date.getDate();
var formattedDate = `${month} ${day}, New York`;

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div className="header__logo-date">{formattedDate}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__avatar-button"
            type="text"
            onClick={onCreateModal}
          >
            +Add Clothes
          </button>
        </div>
        <div className="header__avatar-name">Terrence Tegegne</div>
        <div>
          <img src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
