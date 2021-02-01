import React, {useEffect, useState} from "react";
import {GET_ESTABLISHMENTS, POST_ESTABLISHMENTS} from "../../../constants/api";

function AddEstablishment() {

  const [establishment, setEstablishment] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GET_ESTABLISHMENTS)
    .then((response) => response.json())
    .then((json) => setEstablishment(json))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  const idLength = establishment.length + 1;

  return (
    <div className="message__wrap message__wrap--wide">
      <h2 className="message__wrap--heading">Add Establishment</h2>
      <form method="POST" action={POST_ESTABLISHMENTS} className="message__item">
        <div className="message__item--left">
          <label htmlFor="establishmentName" className="message__item--label">
            Name:
          </label>
          <input
            type="text"
            name="establishmentName"
            className="message__item--input"
          />
          <label htmlFor="establishmentEmail" className="message__item--label">
            Email:
          </label>
          <input
            type="email"
            name="establishmentEmail"
            className="message__item--input"
          />
          <label htmlFor="googleLat" className="message__item--label">
            Google Latitude:
          </label>
          <input
            type="number"
            name="googleLat"
            className="message__item--input"
          />
          <label htmlFor="googleLong" className="message__item--label">
            Google Longitude:
          </label>
          <input
            type="number"
            name="googleLong"
            className="message__item--input"
          />
          <label htmlFor="id" className="message__item--label">ID</label>
          <input type="number" name="id" value={idLength || ''} className="message__item--input" readOnly/>
        </div>
        <div className="message__item--right">
          <p>
          <label htmlFor="selfCatering" className="message__item--radiovalue">Self Catering:</label>
          <label htmlFor="true" className="message__item--radiovalue"> Yes</label>
          <input type="radio" name="selfCatering" value="true" />
          <label htmlFor="false" className="message__item--radiovalue">No</label>
          <input type="radio" name="selfCatering" value="false" />
          </p>
        
          <label htmlFor="price" className="message__item--label">Price:</label>
          <input type="number" name="price" className="message__item--input" />
          <label htmlFor="maxGuests" className="message__item--label">Max Guests:</label>
          <input type="number" name="maxGuests" className="message__item--input" />
          <label htmlFor="imageUrl" className="message__item--label">Image Url:</label>
          <input type="text" name="imageUrl" className="message__item--input" />
        </div>
        <label htmlFor="descriprion" className="message__item--label">Description:</label>
        <textarea name="description" className="message__item--textarea"></textarea>
        <button className="btn__add btn--greenthin" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddEstablishment;
