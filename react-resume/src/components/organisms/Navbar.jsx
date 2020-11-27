import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#introduction">Profile</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#endorsement">Endorsement</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
