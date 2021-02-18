import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <NavLink
          exact={true}
          activeClassName="active-link"
          className="nav-link"
          to="/"
        >Home page</NavLink>
        <NavLink
          exact={true}
          activeClassName="active-link"
          className="nav-link"
          to="/"
        >Projects</NavLink>
        <NavLink
          exact={true}
          activeClassName="active-link"
          className="nav-link"
          to="/"
        >Contact</NavLink>
        <NavLink
          exact={true}
          activeClassName="active-link"
          className="nav-link"
          to="/"
        >Localization</NavLink>
    </div>
  );
};
export default Navbar;
