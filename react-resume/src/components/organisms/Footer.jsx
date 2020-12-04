import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const author = "Hoshito Furuno";
  return (
    <section id="footer">
      <div class="footer-container">
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
    </section>
  );
}

export default Footer;
