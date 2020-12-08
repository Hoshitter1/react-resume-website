import React from "react";

import ExperienceList from "~/components/molecules/ExperienceList";

import { PlainSection } from "~/components/templates/Section";

import experiences from "~/data/experience/all";

function Experiences() {
  return (
    <PlainSection name="experience">
      <h1 className="section-title">Experience DAYO</h1>
      <hr />
      <div
        className="container-fluid container-fluid-extended"
        style={{ maxWidth: "1000px" }}
      >
        {experiences.map((obj, index) => {
          return (
            <ExperienceList
              key={index}
              companyName={obj.companyName}
              term={obj.term}
              position={obj.position}
              description={obj.description}
              contract={obj.contract}
              url={obj.url}
              urlString={obj.urlString}
            />
          );
        })}
      </div>
    </PlainSection>
  );
}

export default Experiences;
