import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <nav>
          <NavLink exact className="nav__option" activeClassName="navitem--selected" to="/">
              Home
          </NavLink>
          <NavLink exact className="nav__option" activeClassName="navitem--selected" to="/cv">
              Cv
          </NavLink>
          <NavLink exact className="nav__option" activeClassName="navitem--selected" to="/projects">
              Projects
          </NavLink>
      </nav>
    )
  }
}

export default Nav;
