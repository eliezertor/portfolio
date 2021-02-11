import React, { useState } from "react";
import emailjs from "emailjs-com";
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
    <form className="contact" onSubmit={sendEmail}>
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
        placeholder="Leave me a lovely message place"
        className="contact__message-input"
        name="message"
        id="message"
      />

      <input className="contact__btn" type="submit" value="Send" />
    </form>
  );
}
