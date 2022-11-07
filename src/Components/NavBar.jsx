import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink className="nav-link" to="/">
            useCounter
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/ReducerCounter">
            ReducerCounter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
