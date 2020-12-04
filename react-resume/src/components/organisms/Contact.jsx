import React from "react";

import ContactList from "~/components/molecules/ContactList";

import contacts from "~/data/contact/all";

function Contact() {
  return (
    <section id="contact">
      <h1 className="section-title">Contact</h1>
      <hr />
      <div
        className="container-fluid container-fluid-extended"
        style={{ maxWidth: "800px" }}
      >
        <div className="row">
          {contacts.map((obj) => (
            <ContactList
              key={obj.key}
              url={obj.url}
              urlName={obj.urlName}
              iconType={obj.iconType}
              icon={obj.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
