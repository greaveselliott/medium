import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = ({ config }) => (
  <nav className="navigation" role="menu">
    <ul className="navigation__list">
      {config.map(({ path, label }) => (
        <li className="navigation__list-item">
          <NavLink
            to={path}
            exact
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
