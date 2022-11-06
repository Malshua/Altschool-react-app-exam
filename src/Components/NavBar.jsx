import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink className="nav" to="/">
            useCounter
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/ReducerCounter">
            ReducerCounter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
