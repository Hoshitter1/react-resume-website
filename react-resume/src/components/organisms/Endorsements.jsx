import React from "react";

import EndorsementList from "~/components/molecules/EndorsementList";

import endorsements from "~/data/endorsement/all";

function Endorsements() {
  return (
    <section className="colored-section" id="endorsement">
      <h1 className="section-title">Endorsement</h1>
      <hr />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {endorsements.map((obj, index) => (
            <EndorsementList
              key={obj.key}
              index={index}
              endorsement={obj.endorsement}
              endorsementPersonName={obj.endorsementPersonName}
              endorsementPersonPosition={obj.endorsementPersonPosition}
              endorsementPersonUrl={obj.endorsementPersonUrl}
              endorsementPersonImageUrl={obj.endorsementPersonImageUrl}
              endorsementCompanyName={obj.endorsementCompanyName}
              endorsementCompanyUrl={obj.endorsementCompanyUrl}
            />
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon control-extend"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Endorsements;
