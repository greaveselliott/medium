import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <NavLink
          to="/"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Home
        </NavLink>
      </li>
      <li className="navigation_list-item">
        <NavLink
          to="/about"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          About
        </NavLink>
      </li>
      <li className="navigation_list-item">
        <NavLink
          to="/gallery"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Gallery
        </NavLink>
      </li>
      <li className="navigation_list-item">
        <NavLink
          to="/contact"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
