import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function PortfolioList(props) {
  const index = props.index;
  const title = props.title;
  const url = props.url;
  const imgUrl = props.imgUrl;
  const tech = props.tech;
  const description = props.description;
  const button = props.button;

  const [open, setOpen] = useState(false);

  function createButton() {
    switch (button) {
      case "github":
        return (
          <button type="button" className="btn btn-dark btn-lg">
            <i className="fab fa-github" style={{ paddingRight: "0.5rem" }} />
            Github
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
      case "project":
        return (
          <button type="button" className="btn btn-info btn-lg">
            Project
          </button>
        );
      default:
        throw Error("button has to be either github or qiita");
    }
  }

  function customButtonStyle() {
    if (open) {
      return {
        fontFamily: "FontAwesome",
      };
    }
    return {
      whiteSpace: "pre",
      fontFamily: "FontAwesome",
    };
  }

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

          <Collapse in={open}>
            <div id="example-collapse-text">
              <p>{description}</p>
              <div style={{ paddingBottom: "15px", textAlign: "center" }}>
                <a target="_blank" href={url}>
                  {createButton()}
                </a>
              </div>
            </div>
          </Collapse>
          <div
            style={{ cursor: "pointer", padding: "7% 0" }}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? (
              <i class="fas fa-chevron-up" />
            ) : (
              <span>
                read more <br />
                <i class="fas fa-chevron-down" />
              </span>
            )}
          </div>
          {/* <Button
            variant="outline-info"
            size="sm"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? (
              <i class="fas fa-chevron-up" />
            ) : (
              <span>
                read more <br />
                <i class="fas fa-chevron-down" />
              </span>
            )}
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioList;
