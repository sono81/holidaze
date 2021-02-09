import React from "react";
import { POST_MESSAGES } from "../../constants/api";

function Contact() {
  return (
    <div className="message__wrap message__wrap--contact">
      <h2 className="message__wrap--heading">Contact Holidaze</h2>
      <form method="POST" action={POST_MESSAGES} className="message__item">
        <fieldset>
          <label htmlFor="clientName" className="message__item--label">
            Full Name:
          </label>
          <input
            type="text"
            name="clientName"
            className="message__item--input"
          ></input>
          <label htmlFor="email" className="message__item--label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="message__item--input"
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="message" className="message__item--label">
            Message
          </label>
          <textarea name="message" className="message__item--textarea" />
        </fieldset>
        <button className="btn__add btn--greenthin btn--contact" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
