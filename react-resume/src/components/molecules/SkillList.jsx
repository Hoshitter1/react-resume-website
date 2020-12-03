import React from "react";
import Skill from "~/components/atoms/Skill";

function SkillList(props) {
  let object = props.object;
  let numHalfSection = Object.keys(object).length / 2;
  let firstHalfObjectKeys = Object.keys(object).filter(
    (value, index) => index < numHalfSection
  );
  let secondHalfObjectKeys = Object.keys(object).filter(
    (value, index) => numHalfSection <= index
  );

  return (
    <div className="row">
      <div className="col-lg-6">
        <ul className="no-bullets">
          {firstHalfObjectKeys.map((key, index) => {
            return (
              <Skill
                key={index}
                index={index}
                language={key}
                score={object[key]}
              />
            );
          })}
        </ul>
      </div>
      <div className="col-lg-6">
        <ul className="no-bullets">
          {secondHalfObjectKeys.map((key, index) => {
            return (
              <Skill
                key={index}
                index={index}
                language={key}
                score={object[key]}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SkillList;
