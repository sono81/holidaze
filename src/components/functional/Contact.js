import React from "react";

function Contact() {
  return (
    <div className="message__wrap message__wrap--contact">
      <h2 className="message__wrap--heading">Contact Location Name</h2>
      <form className="message__item">
        <fieldset>
          <label className="message__item--label">First name:</label>
          <input type="text" name="first-name" className="message__item--input"></input>
          <label className="message__item--label">Last name:</label>
          <input type="text" name="last-name" className="message__item--input"></input>
          </fieldset>
          <fieldset>
          <label className="message__item--label">Email:</label>
          <input type="email" name="email" className="message__item--input"></input>
          <label className="message__item--label">Phone:</label>
          <input type="number" name="phone" className="message__item--input"></input>
        </fieldset>
        <fieldset>
            <label className="message__item--label">Message</label>
            <textarea className="message__item--textarea" />
        </fieldset>
        <button className="btn__add btn--greenthin btn--contact" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
