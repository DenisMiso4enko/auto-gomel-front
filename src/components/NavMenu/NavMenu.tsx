import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink className="menu-item" to="/">
            Главная
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu-item" to="/parts">
            Запчасти
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu-item" to="/delivery">
            Доставка
          </NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink className="menu-item" to="/about">
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
