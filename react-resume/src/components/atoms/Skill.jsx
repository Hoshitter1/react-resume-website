import React from "react";

function skillElement(props) {
  let score = props.score;
  if (score < 1) {
    throw Error("Skill has to be greater than 0");
    // TODO: Create custom error
  }
  let index = props.index;
  let language = props.language;

  let numFill = score;
  let numEmpty = 5 - numFill;

  return (
    <li key={index}>
      <span class="skill-name">{language}</span>
      <span class="skill-level">
        {Array.from(Array(numEmpty), (e, i) => (
          <i key={i} class="customized-star far fa-star"></i>
        ))}
        {Array.from(Array(numFill), (e, i) => (
          <i key={i} class="customized-star fas fa-star"></i>
        ))}
      </span>
    </li>
  );
}

export default skillElement;
