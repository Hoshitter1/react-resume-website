import React from "react";

function ExperienceList(props) {
  const companyName = props.companyName;
  const term = props.term;
  const position = props.position;
  const description = props.description;
  const contract = props.contract;
  const url = props.url;
  const urlString = props.urlString;

  return (
    <div className="row">
      <div className="col-lg-4 experience-title">
        <h3>{companyName}</h3>
        <p>{term}</p>
      </div>
      <div className="col-lg-8 col-md-8 experience-content">
        <h5>{position}</h5>
        <p>{description}</p>
        <span className="career-footer">
          <span>
            <i className="career-footer-icon fas fa-briefcase"></i>
            {contract}
          </span>
          {url != "" && <span className="separator">|</span>}
          {url != "" && (
            <a target="_blank" href={url}>
              <i className="career-footer-icon fas fa-link"></i>
              {urlString}
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

export default ExperienceList;
