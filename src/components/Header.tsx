import React from "react";

interface HeaderProps {
  currentPage: "home" | "portfolio";
  setCurrentPage: (page: "home" | "portfolio") => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header>
      <h1>Eva Björling</h1>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => setCurrentPage("home")}
              style={{ color: currentPage === "home" ? "#d3d0c0" : "inherit" }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("portfolio")}
              style={{
                color: currentPage === "portfolio" ? "#d3d0c0" : "inherit",
              }}
            >
              Portfolio
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
