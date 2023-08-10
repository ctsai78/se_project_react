import "./Header.css";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
        <div className="header__logo-date">June 15, New York</div>
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
          <img src={require("../../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
