import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="Logo" />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="company-details">
          <div>
            <h3>Important Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/booking">Reservations</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                Email: <br /> little@lemon.com
              </li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="copyright"></div>
    </footer>
  );
};

export default Footer;
