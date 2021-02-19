import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Data from "../../data/data.json";
import { v4 as uuidv4 } from "uuid";
import Plane from "../../assets/icons/paper-plane-solid.svg";
import "./contact.scss";

export default function ContactUs() {
  let serviceId = "service_wk5nili";
  let templateId = "template_ume76um";
  let userId = "user_fgqf1auVWi89eBgAagyXe";
  let key = "6LcNHl8aAAAAAHGZukEemWMX0xlcmM1R9guxd3T1";

  function onChange(value) {
    console.log("Captcha value:", value);
  }

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
      <div className="contact__why">
        <h5 className="contact__why-title">Say “Hola”</h5>
        <p className="contact__why-me">Especially if...</p>
        <ul className="contact__why-me-list">
          <li className="contact__why-me--bullet">
            You need a big-picture-thinking, problem-solving full-stack
            engineer.
          </li>
          <li className="contact__why-me--bullet">
            You’d like to nerd out about podcasts or web development.
          </li>
          <li className="contact__why-me--bullet">
            You like building cars (I'm working on an RX7 FD).
          </li>
        </ul>
        <p className="contact__why-me">I can’t wait to chat. </p>
      </div>
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
          placeholder="Send me some love"
          className="contact__message-input"
          name="message"
          id="message"
        />
        {/* <div className="g-recaptcha" data-sitekey={key}></div> */}

        <ReCAPTCHA sitekey={key} onChange={onChange} theme="dark" />
        <input className="contact__btn" type="image" alt="Send" src={Plane} />
      </form>
      <div className="navbar__menu-social">
        {Data.social.map((social) => {
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
