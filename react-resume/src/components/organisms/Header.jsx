import React from "react";

function Header() {
  return (
    <section id="top">
      <div className="jumbotron jumbotron-extend" style={{ marginBottom: 0 }}>
        <div className="container-fluid container-fluid-heading position-absolute">
          <div className="heading-mobile">
            <h1 className="line-1 anim-typewriter">Hoshito Furuno</h1>
            <hr
              style={{ width: "50%", backgroundColor: "black", opacity: 0.5 }}
            />
            <p>Resume</p>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="bg-img"></div>
      </div>
    </section>
  );
}

export default Header;
