import React from "react";

import FillOutHelper from "~/components/atoms/FillOutHelper";

import SkillList from "~/components/molecules/SkillList";

import { ColorSection } from "~/components/templates/Section";

import programmingLanguage from "~/data/skill/ProgrammingLanguage";
import framework from "~/data/skill/Framework";
import tool from "~/data/skill/Tool";
import cloudService from "~/data/skill/CloudService";
import Knowledge from "~/data/skill/Knowledge";
import naturalLanguage from "~/data/skill/NaturalLanguage";

function Skills() {
  // TODO: String becomes an object after formatting
  const titleAndData = {
    "Programming Languages": programmingLanguage,
    Frameworks: framework,
    Tools: tool,
    "Cloud Services": cloudService,
    Knowledge: Knowledge,
    "Natural Languages": naturalLanguage,
  };
  return (
    <ColorSection name="skills">
      <h1 className="section-title">Skills</h1>
      <hr />
      {Object.keys(titleAndData).map((title, index) => {
        return (
          <div key={index} className="container-fluid container-fluid-extended">
            <h2 className="skill-section">{title}</h2>
            <SkillList key={index} object={titleAndData[title]} />
          </div>
        );
      })}
      <FillOutHelper />
    </ColorSection>
  );
}

export default Skills;
