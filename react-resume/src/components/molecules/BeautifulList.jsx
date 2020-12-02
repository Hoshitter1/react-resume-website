import React from "react";
import Skill from "~/components/atoms/Skill";

function BeautifulList(props) {
  let object = props.object;
  let numHalfSection = Object.keys(object).length / 2;
  let firstHalfObjectKeys = Object.keys(object).filter(
    (value, index) => index < numHalfSection
  );
  let secondHalfObjectKeys = Object.keys(object).filter(
    (value, index) => numHalfSection <= index
  );

  return (
    <div class="row">
      <div class="col-lg-6">
        <ul class="no-bullets">
          {firstHalfObjectKeys.map((key, index) => {
            return <Skill index={index} language={key} score={object[key]} />;
          })}
        </ul>
      </div>
      <div class="col-lg-6">
        <ul class="no-bullets">
          {secondHalfObjectKeys.map((key, index) => {
            return <Skill index={index} language={key} score={object[key]} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default BeautifulList;
