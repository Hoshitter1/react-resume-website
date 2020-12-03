import React from "react";

import ExperienceList from "~/components/molecules/ExperienceList";

import experiences from "~/data/experience/all";

function Experiences() {
  return (
    <section id="experience">
      <h1 className="section-title">Experience</h1>
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
    </section>
  );
}

export default Experiences;
