import React from "react";

function EndorsementList(props) {
  const index = props.index;
  const endorsement = props.endorsement;
  const endorsementPersonName = props.endorsementPersonName;
  const endorsementPersonPosition = props.endorsementPersonPosition;
  const endorsementPersonUrl = props.endorsementPersonUrl;
  const endorsementPersonImageUrl = props.endorsementPersonImageUrl;
  const endorsementCompanyName = props.endorsementCompanyName;
  const endorsementCompanyUrl = props.endorsementCompanyUrl;

  function changeActiveOverTime() {
    // TODO: This is temporaly fix. Must be replaced with react-bootstrap
    return index == 0
      ? "carousel-item container-fluid active"
      : "carousel-item container-fluid";
  }

  return (
    <div
      key={index}
      className={changeActiveOverTime()}
      style={{ padding: "7% 15%" }}
    >
      <h2 className="testimonial-text">{endorsement}</h2>
      <a target="_blank" href={endorsementPersonUrl}>
        <img
          className="testimonial-image"
          src={endorsementPersonImageUrl}
          alt={endorsementPersonName + "-profile"}
        />
      </a>
      <span className="endorsement-description">
        <span className="endorsement-name">{endorsementPersonName} </span>
        <span className="endorsement-position">
          {endorsementPersonPosition} |
          <a
            target="_blank"
            href={endorsementCompanyUrl}
            className="endorsement-link"
          >
            {endorsementCompanyName}
          </a>
        </span>
      </span>
    </div>
  );
}

export default EndorsementList;
