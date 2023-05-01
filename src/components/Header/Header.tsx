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
          {/* <form>*/}
          {/*	<input className="form-control" type="text" placeholder="Поиск запчасти..."/>*/}
          {/* </form>*/}
          Telefone
        </div>
      </div>
    </header>
  );
};

export default Header;
