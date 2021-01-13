import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import { GET_ESTABLISHMENTS } from "../../constants/api";
import EstablishmentItems from "./EstablishmentItems";

function LandingPage() {
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    fetch(GET_ESTABLISHMENTS)
      .then((response) => response.json())
      .then((json) => {
        setEstablishments(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Banner />
      <h1 className="establishment__h1">Places to stay</h1>
      <div className="establishment">
        {establishments.map((data) => {
          const { establishmentName, imageUrl, description, id } = data;

          return (
            <EstablishmentItems
              name={establishmentName}
              image={imageUrl}
              description={description}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
}

export default LandingPage;
