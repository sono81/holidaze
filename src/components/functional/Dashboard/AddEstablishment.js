import React from "react";

function AddEstablishment() {
  return (
    <div className="message__wrap message__wrap--wide">
      <h2 className="message__wrap--heading">Add Establishment</h2>
      <form className="message__item">
        <label className="message__item--label">Name:</label>
        <input type="text" className="message__item--input"/>
        <label className="message__item--label">Email:</label>
        <input type="email" className="message__item--input"/>
        <label className="message__item--label">Google Lat:</label>
        <input type="number" className="message__item--input"/>
        <label className="message__item--label">Google Lng:</label>
        <input type="number" className="message__item--input"/>
        <p className="message__item--label">
          Self Catering:
          <label>
            <input type="radio" value="yes" name="selfCatering" />
            Yes
          </label>
          <label>
            <input type="radio" value="no" name="selfCatering" />
            No
          </label>
        </p>
        <label className="message__item--label">Price:</label>
        <input type="number" className="message__item--input"/>
        <label className="message__item--label">Max Guests:</label>
        <input type="number" className="message__item--input"/>
        <label className="message__item--label">Description:</label>
        <textarea className="message__item--textarea"></textarea>
        <button className="btn__add btn--greenthin" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEstablishment;
