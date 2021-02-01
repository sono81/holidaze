import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import { GET_ESTABLISHMENTS } from "../../constants/api";
import EstablishmentItems from "./EstablishmentItems";
import SearchBar from "../functional/SearchBar";

function LandingPage() {
  const [establishments, setEstablishments] = useState([]);
  const [establishmentFilter, setEstablishmentFilter] = useState([]);

  useEffect(() => {
    fetch(GET_ESTABLISHMENTS)
      .then((response) => response.json())
      .then((json) => {
        setEstablishments(json);
        setEstablishmentFilter(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterEstablishments = function (event) {
    const searchLowercase = event.target.value.toLowerCase();

    const filterArray = establishments.filter(function (establish) {
      const lowercaseName = establish.establishmentName.toLowerCase();
      if (lowercaseName.includes(searchLowercase)) {
        return true;
      }
      return false;
    });

    setEstablishmentFilter(filterArray);
  };

  return (
    <>
      <Banner />
      <h1 className="establishment__h1" id="establishment">
        Places to stay
      </h1>
      {establishmentFilter.map((datas) => {
        const { establishmentName, id } = datas;
        return (
          <React.Fragment key={id}>
            <SearchBar
              handleSearch={filterEstablishments}
              value={establishmentName}
              id={id}
            />
          </React.Fragment>
        );
      })}[]
      <SearchBar handleSearch={filterEstablishments} />
      <div className="establishment">
        {establishments.map((data) => {
          const { establishmentName, imageUrl, description, id } = data;
          return (
            <React.Fragment key={id}>
              <EstablishmentItems
                name={establishmentName}
                image={imageUrl}
                description={description}
                id={id}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default LandingPage;
