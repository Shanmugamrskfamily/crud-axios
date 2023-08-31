import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="row my-3 bg-dark p-2 m-2">
      <header className="d-flex justify-content-space-between py-3">
        <ul className="nav nav-pills">
          <li className="nav-item nav-link ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item nav-link ">
            <NavLink
              to="/ListPages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Show users data
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;