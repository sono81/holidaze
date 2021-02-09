import React from "react";
import { Link } from "react-router-dom";

function EstablishmentItems({ name, image, description, id }) {
  return (
    <div className="establishment__card">
      <img
        className="establishment__image"
        src={image}
        alt="The establishment"
      />
      <h2 className="establishment__h2">{name}</h2>
      <p className="establishment__description">{description}</p>
      <Link to={"establishment/" + id} style={{ textDecoration: "none" }}>
        <div className="btn btn__card btn--green">More info</div>
      </Link>
    </div>
  );
}

export default EstablishmentItems;
