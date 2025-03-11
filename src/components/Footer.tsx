import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Downloads</h3>
          <li>
            <a
              className="footer-link"
              href="/EvaBjorlingEnglishCV2025.pdf"
              download
            >
              English CV
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="/EvaBjorlingSweCV2025.pdf"
              download
            >
              Swedish CV
            </a>
          </li>
        </div>
        <div className="footer-center">
          <h3>Eva Björling</h3>
          <p>Fullstack Developer</p>
          <p>94evbj42@gmail.com</p>
          <p>+46 73 877 41 88</p>
        </div>
        <div className="footer-right">
          <h3>Socials</h3>
          <li>
            <a className="footer-link" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="https://github.com/evesteve94"
              target="_blank"
            >
              Github
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
