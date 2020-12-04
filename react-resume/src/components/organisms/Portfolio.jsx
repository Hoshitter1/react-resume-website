import React from "react";

import PortfolioList from "~/components/molecules/PortfolioList";

import portfolio from "~/data/portfolio/all";

function Portfolio() {
  return (
    <section id="portfolio">
      <h1 className="section-title">Portfolio</h1>
      <hr />
      <div
        className="container-fluid container-fluid-extended"
        style={{ maxWidth: "900px", textAlign: "center" }}
      >
        <div className="row">
          {portfolio.map((obj, index) => (
            <PortfolioList
              key={obj.key}
              index={index}
              title={obj.title}
              url={obj.url}
              imgUrl={obj.imgUrl}
              tech={obj.tech}
              description={obj.description}
              button={obj.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
