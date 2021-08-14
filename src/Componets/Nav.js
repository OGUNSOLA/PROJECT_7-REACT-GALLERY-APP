import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/waterfall">
        <li className="navItem">WATERFALLS</li>
      </NavLink>
      <NavLink to="/MACAW">
        <li className="navItem">MACAW</li>
      </NavLink>
      <NavLink to="/bison">
        <li className="navItem">BISON</li>
      </NavLink>
    </div>
  );
}

export default withRouter(Nav);