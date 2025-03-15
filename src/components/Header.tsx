import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <h1>Eva Björling</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              style={{
                color: location.pathname === "/" ? "#d3d0c0" : "inherit",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              style={{
                color:
                  location.pathname === "/portfolio" ? "#d3d0c0" : "inherit",
              }}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
