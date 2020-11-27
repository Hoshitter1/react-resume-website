import React from "react";
import ButtonBootstrap from "~/components/atoms/Button";

function Introduction() {
  const hobbies = ["#Surfing", "#Photography", "#Tennis", "#Games"];
  return (
    <section id="introduction">
      <h1 className="section-title">Profile</h1>
      <hr id="intro-about" />
      <div
        className="container-fluid container-fluid-extended"
        style={{ maxWidth: "1000px" }}
      >
        <div className="row">
          <div className="col-lg-4 profile-description">
            <h2 className="profile-name">About me</h2>
            <p className="profile-title">
              I am a full stack and machine learning engineer. I love developing
              things, as well as thinking about business based on data - such as
              marketing, customer experience, trading financial products etc. My
              favourite hobby is taking pictures! You can find my website for
              photography from the link in the Details section.
            </p>
          </div>
          <div className="col-lg-4 profile-img-container">
            <img
              alt=""
              className="profile-img"
              src="images/hoshito_cropped.png"
            />
          </div>
          <div className="col-lg-4 profile-description">
            <h2 className="profile-name">Details</h2>
            <p>
              <strong style={{ fontWeight: 700 }}>Name</strong>
              <br />
              Hoshito Furuno
              <br />
              <strong style={{ fontWeight: "bold" }}>Nationality</strong>
              <br />
              Japanese
              <br />
              <strong style={{ fontWeight: "bold" }}>My hobbies</strong>
              <br />
              {hobbies.map((value, index) => (
                <ButtonBootstrap key={index} name={value}></ButtonBootstrap>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
