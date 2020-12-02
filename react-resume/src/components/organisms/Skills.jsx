import React from "react";

import FillOutHelper from "~/components/atoms/FillOutHelper";

import BeautifulList from "~/components/molecules/BeautifulList";

import programmingLanguage from "~/data/skill/ProgrammingLanguage";
import framework from "~/data/skill/Framework";
import tool from "~/data/skill/Tool";
import cloudService from "~/data/skill/CloudService";
import Knowledge from "~/data/skill/Knowledge";
import naturalLanguage from "~/data/skill/NaturalLanguage";

function Skills() {
  const titleAndData = {
    "Programming Languages": programmingLanguage,
    Frameworks: framework,
    Tools: tool,
    "Cloud Services": cloudService,
    Knowledge: Knowledge,
    "Natural Languages": naturalLanguage,
  };
  return (
    <section class="colored-section" id="skills">
      <h1 class="section-title">Skills</h1>
      <hr />
      {Object.keys(titleAndData).map((title, index) => {
        return (
          <div class="container-fluid container-fluid-extended">
            <h2 class="skill-section">{title}</h2>
            <BeautifulList key={index} object={titleAndData[title]} />
          </div>
        );
      })}
      <FillOutHelper />
    </section>
  );
}

export default Skills;
