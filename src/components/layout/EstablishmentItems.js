import React from "react";

function EstablishmentItems({ name, image, description }) {
  return (
      <div className="establishment__card">
        <img
          className="establishment__image"
          src={image}
          alt="The establishment"
        />
        <h2 className="establishment__h2">{name}</h2>
        <p className="establishment__description">{description}</p>
        <div className="btn btn__card btn--green">More info</div>
      </div>
  );
}

export default EstablishmentItems;
