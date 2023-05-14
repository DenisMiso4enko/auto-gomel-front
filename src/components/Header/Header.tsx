import React from "react";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__body container">
        <div className="logo" style={{ fontSize: "20px", fontWeight: "700" }}>
          AUTOGOMEL
        </div>
        <NavMenu />
        <div className="header__search">
          <div className="header__phone">
            <a href="tel:+375298378081">+375 29 837 80 81</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
