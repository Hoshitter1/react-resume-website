import React from "react";

import { PlainSection } from "~/components/templates/Section";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const author = "Hoshito Furuno";
  return (
    <PlainSection name="footer">
      <div className="footer-container">
        <p>
          ©︎{year} {author}
        </p>
        <p>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </div>
    </PlainSection>
  );
}

export default Footer;
