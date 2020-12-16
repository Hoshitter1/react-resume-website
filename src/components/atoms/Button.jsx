import React from "react";

function ButtonBootstrap(props) {
  return (
    <button
      type="button"
      className={"btn " + "btn-outline-" + props.style}
      style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
    >
      {props.name}
    </button>
  );
}

export { ButtonBootstrap };
