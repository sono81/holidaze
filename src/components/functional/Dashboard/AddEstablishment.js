import React from "react";

function AddEstablishment() {
  return (
    <div className="message">
      <h2>Add Establishment</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Google Lat</label>
        <input type="number" />
        <label>Google Lng</label>
        <input type="number" />
        <p>
          Self Catering
          <label>
            <input type="radio" value="yes" name="selfCatering" />
            Yes
          </label>
          <label>
            <input type="radio" value="no" name="selfCatering" />
            No
          </label>
        </p>
        <label>Price</label>
        <input type="number" />
        <label>Max Guests</label>
        <input type="number" />
        <label>Description</label>
        <textarea></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEstablishment;
