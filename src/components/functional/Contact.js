import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact Location Name</h2>
      <form>
        <fieldset>
          <label>First name:</label>
          <input type="text" name="first-name"></input>
          <label>Last name:</label>
          <input type="text" name="last-name"></input>
          <label>Email:</label>
          <input type="email" name="email"></input>
          <label>Phone:</label>
          <input type="number" name="phone"></input>
        </fieldset>
        <fieldset>
            <label>Message</label>
        </fieldset>
        <div className="btn">Send</div>
      </form>
    </>
  );
}

export default Contact;
