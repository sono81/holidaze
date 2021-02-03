import React from "react";
import { POST_ENQUIRIES } from "../../constants/api";

function Enquiry(data) {
    const name = data.title.establishmentName
  return (
    <div className="message__wrap message__wrap--contact">
      <h2 className="message__wrap--heading">Book at {name}</h2>
      <form method="POST" action={POST_ENQUIRIES} className="message__item">
        <fieldset>
          <label htmlFor="establishment" className="message__item--label">Establishment:</label>
          <input
            type="text"
            name="establishment"
            className="message__item--input"
            value={name}
            readOnly
          />
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
          <label htmlFor="checkin">
            Check-In
          </label>
          <input type="date" name="checkin" />
          <label htmlFor="checkout">
            Check-Out
          </label>
          <input type="date" name="checkout" />
        </fieldset>
        <button className="btn__add btn--greenthin btn--contact" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Enquiry;
