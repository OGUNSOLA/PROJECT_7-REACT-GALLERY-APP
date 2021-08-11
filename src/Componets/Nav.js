import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/koala">
        <li className="navItem">KOALA</li>
      </NavLink>
      <NavLink to="/panda">
        <li className="navItem">PANDA</li>
      </NavLink>
      <NavLink to="/puma">
        <li>PUMA</li>
      </NavLink>
    </div>
  );
}

export default withRouter(Nav);