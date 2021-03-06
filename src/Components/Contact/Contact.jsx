import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import Data from '../../data/data.json';
import { v4 as uuidv4 } from 'uuid';
import Plane from '../../assets/icons/paper-plane-solid.svg';
import './contact.scss';

export default function ContactUs() {
 let serviceId = process.env.REACT_APP_SERVICE_ID;
  let templateId = process.env.REACT_APP_TEMPLATE_ID;
  let userId = process.env.REACT_APP_USER_ID;
  let keys = process.env.REACT_APP_SITE_KEY;
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let [successOrNot, setSuccessOrNot] = useState('');
  let [errorOrNot, setErrorOrNot] = useState('');


  function onChange(value) {
    console.log('Captcha value:', value);
  }

  let nameValue = document.getElementById('from_name');
  let messageValue = document.getElementById('message');
  let emailValue = document.getElementById('from_email');

  if (name !== '') {
    nameValue.style.backgroundImage = 'none';
  }

  if (email !== '') {
    emailValue.style.backgroundImage = 'none';
  }

  if (message !== '') {
    messageValue.style.backgroundImage = 'none';
  }

  function sendEmail(e) {
    e.preventDefault();

    if (name === '') {
      setErrorOrNot("Don't forget your name, I need to know who you are.");
      setSuccessOrNot('contact__form-message--error');
    } else if (email === '') {
      setErrorOrNot('No call display here, where do I email you? ');
      setSuccessOrNot('contact__form-message--error');
    } else if (message === '') {
      setErrorOrNot('What are we chatting about?');
      setSuccessOrNot('contact__form-message--error');
    } else {
      emailjs
        .sendForm(serviceId, templateId, e.target, userId)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            if (error.text) {
              setErrorOrNot(error.text);
              setSuccessOrNot('contact__form-message--error');
            }
          }
        )
        .then(
          setSuccessOrNot('contact__form-message--success'),
          setErrorOrNot("Can't wait to chat")
        );
    }
  }

  return (
    <div className="contact">
      <div className="contact__why">
        <h5 className="contact__why-title">Say “Hola”</h5>
        <h5 className="contact__why-me">Especially if...</h5>
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
        <div className="contact__form-message-container">
          <p className={successOrNot}>{errorOrNot}</p>
        </div>
        <input type="hidden" name="contact_number" />
        <input type="hidden" value="Eliezer" name="to_name" />

        <input
          placeholder="Name"
          className="contact__name-input contact__name-input--red"
          type="text"
          name="from_name"
          id="from_name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="contact__email-input contact__email-input--red"
          type="email"
          name="from_email"
          id="from_email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Send me some love"
          className="contact__message-input contact__message-input--red"
          name="message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="contact__send">
          <ReCAPTCHA
            size="normal"
            sitekey={keys}
            onChange={onChange}
            theme="dark"
          />
          <div className="contact__container-btn">
            <input
              className="contact__btn"
              type="image"
              alt="Send"
              src={Plane}
            />
          </div>
        </div>
      </form>
      <div className="navbar__menu-social contact__social-container ">
        {Data.social.map((social) => {
          return (
            <a
              key={uuidv4()}
              href={social.link}
              className="navbar__menu-social-links contact__social-link-container"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${social.logo}`}
                alt={social.name}
                className={`${social.class} contact__social--size `}
              />
            </a>
          );
        })}
      </div>
      <div className="custom-shape-divider-bottom-1614098670">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
