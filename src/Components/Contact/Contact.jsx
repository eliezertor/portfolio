import React, { useState } from "react";
import emailjs from "emailjs-com";
import Data from "../../data/data.json";
import { v4 as uuidv4 } from "uuid";
import Plane from "../../assets/icons/paper-plane-solid.svg";
import Comment from "../../assets/icons/comment-dots-solid.svg";

import "./contact.scss";

export default function ContactUs() {
  let serviceId = "service_wk5nili";
  let templateId = "template_ume76um";
  let userId = "user_fgqf1auVWi89eBgAagyXe";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <input type="hidden" value="Eliezer" name="to_name" />

        <input
          placeholder="Name"
          className="contact__name-input"
          type="text"
          name="from_name"
          id="from_name"
        />

        <input
          placeholder="Email"
          className="contact__email-input"
          type="email"
          name="from_email"
          id="from_email"
        />

        <textarea
          placeholder="Arina loves me"
          className="contact__message-input"
          name="message"
          id="message"
        />

        <input className="contact__btn" type="image" alt="Send" src={Plane} />
      </form>
      <div className="navbar__menu-social">
        {Data.social.map((social) => {
          console.log(social);
          return (
            <a
              key={uuidv4()}
              href={social.link}
              className="navbar__menu-social-links"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={social.logo}
                alt={social.name}
                className={social.class}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
