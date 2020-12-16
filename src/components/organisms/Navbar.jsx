import React, { useState } from "react";

function Navbar() {
  const [clicked, setClicked] = useState(false);
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
        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="menu">
          <ul className={clicked && "showing"}>
            {sectionTItles.map((value, index) => (
              <li key={index}>
                <a onClick={() => setClicked(!clicked)} href={"#" + value}>
                  {capitalize(value)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
