import React from "react";

import { ButtonBootstrap } from "~/components/atoms/Button";

import { PlainSection } from "~/components/templates/Section";

function Profile() {
  const hobbies = ["#Surfing", "#Photography", "#Tennis", "#Games"];
  const hobbiesWithLink = { "#Photography": "https://hoshitophotography.com/" };
  const profileDescription =
    "I am a full stack and machine learning engineer. I love developing things, as well as thinking about business based on data - such as marketing, customer experience, trading financial products etc. My favourite hobby is taking pictures! You can find my website for photography from the link in the Details section.";
  function buttonGenerator(index, hobby) {
    if (Object.keys(hobbiesWithLink).includes(hobby)) {
      return (
        <a key={index} target="_blank" href={hobbiesWithLink[hobby]}>
          <ButtonBootstrap
            key={index}
            name={hobby}
            style="primary"
          ></ButtonBootstrap>
        </a>
      );
    }
    return (
      <ButtonBootstrap
        key={index}
        name={hobby}
        style="secondary"
      ></ButtonBootstrap>
    );
  }

  return (
    <PlainSection name="profile">
      <h1 className="section-title">Profile</h1>
      <hr id="intro-about" />
      <div
        className="container-fluid container-fluid-extended"
        style={{ maxWidth: "1000px" }}
      >
        <div className="row">
          <div className="col-lg-4 profile-description">
            <h2 className="profile-name">About me</h2>
            <p className="profile-title">{profileDescription}</p>
          </div>
          <div className="col-lg-4 profile-img-container">
            <img
              alt="my-img"
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
              {hobbies.map((value, index) => buttonGenerator(index, value))}
            </p>
          </div>
        </div>
      </div>
    </PlainSection>
  );
}

export default Profile;
