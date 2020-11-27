import React from "react";

function Navbar() {
  const sectionTItles = [
    "profile",
    "skills",
    "experience",
    "endorsement",
    "portfolio",
    "contact",
  ];
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div>
      <nav>
        <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="menu">
          <ul>
            {sectionTItles.map((value, index) => (
              <li>
                <a href={"#" + value}>{capitalize(value)}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
