import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Downloads</h3>
          <li>
            <a className="footer-link" href="#">
              English CV
            </a>
          </li>
          <li>
            <a className="footer-link" href="#">
              Swedish CV
            </a>
          </li>{" "}
          <li>
            <a className="footer-link" href="#">
              Greeting
            </a>
          </li>
        </div>
        <div className="footer-center">
          <h3>Eva Björling</h3>
          <p>Fullstack Developer</p>
          <p>94evbj42@gmail.com</p>
          <p>+46 70 123 45 67</p>
        </div>
        <div className="footer-right">
          <h3>Socials</h3>
          <li>
            <a className="footer-link" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="footer-link" href="#">
              Github
            </a>
          </li>
          <li>
            <a className="footer-link" href="#">
              Twitter
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
