import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <Link className="nav-links" to="/about">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </>
  );
};

export default Home;
