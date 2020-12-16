import React from "react";

function ContactList(props) {
  const url = props.url;
  const urlName = props.urlName;
  const iconType = props.iconType;
  //   Change here once new icon type added
  const icon = () => {
    return iconType === "fontAwesome" ? (
      <i className={"contact-icon " + props.icon} />
    ) : (
      "null"
    );
  };

  return (
    <div className="col-lg-6">
      <ul className="no-bullets">
        <li>
          <a href={url} target="_blank">
            {icon()}
            <span className="contact-link">{urlName}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactList;
