import React from "react";

function ColorSection(props) {
  return (
    <section className="colored-section" id={props.name}>
      {props.children}
    </section>
  );
}

function PlainSection(props) {
  return <section id={props.name}>{props.children}</section>;
}

export { PlainSection, ColorSection };
