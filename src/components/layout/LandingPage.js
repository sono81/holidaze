import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import { GET_ESTABLISHMENTS } from "../../constants/api";
import EstablishmentItems from "./EstablishmentItems";
import SearchBar from "../functional/SearchBar";

function LandingPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    fetch(GET_ESTABLISHMENTS)
      .then((response) => response.json())
      .then(
        (json) => {
          setIsLoaded(true);
          setEstablishments(json);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [])

  var optionName = [];

  for (let i = 0; i < establishments.length; i++) {
    optionName.push(establishments[i].establishmentName);
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {


    return (
      
      <>
        <Banner />
        <h1 className="establishment__h1" id="establishment">
          Places to stay
        </h1>
        <SearchBar options={optionName} />
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

  //  const filterEstablishments = function (event) {
  //    const searchLowercase = event.target.value.toLowerCase();
  //
  //    const filterArray = establishments.filter(function (establish) {
  //      const lowercaseName = establish.establishmentName.toLowerCase();
  //      if (lowercaseName.includes(searchLowercase)) {
  //        return true;
  //      }
  //      return false;
  //    });
  //
  //    setEstablishmentFilter(filterArray);
  //  };
}

export default LandingPage;
