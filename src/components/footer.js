import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Event Management App</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li><a href="https://www.instagram.com/itz_rajpoot.47/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/rana-zohaib-677183287">Linked In</a></li>
            <li><a href="https://www.github.com/itx-rajpoot">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
