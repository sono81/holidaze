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
    <>
      <div>
        <img
          src={data.imageUrl}
          alt="The Establishment"
          className="establishment__image establishment__image--portrait"
        />
        <h1>{data.establishmentName}</h1>
        <p>{data.description}</p>
        <p>Price: {data.price}</p>
        <p>Max guests: {data.maxGuests}</p>
        <p>Self catering: {catering()}</p>
      </div>
      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

export default Establishment;
