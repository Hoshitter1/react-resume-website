import React, { useState } from "react";

function PortfolioElement(props) {
  const index = props.index;
  const title = props.title;
  const url = props.url;
  const imgUrl = props.imgUrl;
  const tech = props.tech;
  const description = props.description;
  const button = props.button;

  const [click, setClick] = useState(false);

  function createButton() {
    switch (button) {
      case "github":
        return (
          <button type="button" className="btn btn-dark btn-lg">
            <i className="fab fa-github" style={{ paddingRight: "0.5rem" }}>
              Github
            </i>
          </button>
        );
      case "qiita":
        return (
          <button
            type="button"
            className="btn btn-dark btn-lg"
            style={{ backgroundColor: "#56C500" }}
          >
            Qiita
          </button>
        );
      default:
        throw Error("button has to be either github or qiita");
    }
  }
  console.log("click: " + click);
  //   TODO: use react-boostrap
  return (
    <div className="col-lg-4 col-md-6 portfolio">
      <div className="card text-center card-extended">
        <a target="_blank" href={url}>
          <img
            className="card-img-top card-img-top-extend"
            src={imgUrl}
            alt="Card image cap"
            style={{ width: "40%", margin: "0 auto" }}
          />
        </a>
        <div className="card-body" style={{ textAlign: "center" }}>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted subtitle-extend">
            {tech}
          </h6>

          <div className="collapse-content">
            <div
              className="card-text text-left collapse"
              id={"collapseContent-" + index}
            >
              <p>{description}</p>
              <div style={{ textAlign: "center" }}>
                <a target="_blank" href={url}>
                  {createButton()}
                </a>
              </div>
            </div>
            <div className="collapse-switch" onClick={() => setClick(!click)}>
              <a
                className="btn btn-flat red-text p-1 mt-4 my-1 mr-0 mml-1 collapsed collapsed-extend"
                onClick={() => setClick(!click)}
                data-toggle="collapse"
                href={"#collapseContent-" + index}
                aria-expanded={click}
                aria-controls="collapseContent"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioElement;
