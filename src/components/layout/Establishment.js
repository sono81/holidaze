import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_ESTABLISHMENTS } from "../../constants/api";
import Contact from "../functional/Contact";

function Establishment() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const url = GET_ESTABLISHMENTS + "/" + id;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json[id - 1]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id, url]);

  if (loading) {
    return <div className="loading">Loading content...</div>;
  }

  console.log(data);

  function catering() {
    if (data.selfCatering === true) {
      return <span>Yes</span>;
    }
    return <span>No</span>;
  }

  return (
    <div className="establishment__wrapper">
      <img
        className="establishment__image--portrait"
        src={data.imageUrl}
        alt="The Establishment"
      />
      <div className="establishment__block">
        <h1 className="establishment__h1 establishment__h1--spesific">{data.establishmentName}</h1>
        <div className="establishment__description--spesific">
          <p>{data.description}{data.description}{data.description}{data.description}{data.description}</p>
          <p><b>Price:</b> {data.price}</p>
          <p><b>Max guests:</b> {data.maxGuests}</p>
          <p><b>Self catering:</b> {catering()}</p>
        </div>
      </div>

      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Establishment;
