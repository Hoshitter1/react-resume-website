import React from "react";

function skillElement(props) {
  let score = props.score;
  let index = props.index;
  let language = props.language;

  let numFill = score;
  let numEmpty = 5 - numFill;

  return (
    <li key={index}>
      <span className="skill-name">{language}</span>
      <span className="skill-level">
        {Array.from(Array(numEmpty), (e, i) => (
          <i key={i} className="customized-star far fa-star"></i>
        ))}
        {Array.from(Array(numFill), (e, i) => (
          <i key={i} className="customized-star fas fa-star"></i>
        ))}
      </span>
    </li>
  );
}

export default skillElement;
