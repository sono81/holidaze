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
      <h1>LandingPage</h1>
      {establishments.map((data) => {
        const { establishmentName } = data;

        return (
          <EstablishmentItems 
          establishmentName={establishmentName} 
          />
        );
      })}
    </>
  );
}

export default LandingPage;
