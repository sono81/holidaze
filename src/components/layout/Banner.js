import React from "react";
import BannerImage from "../../images/locations/zhang-shaoqi-p88RtasclWk-unsplash.jpg";

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={BannerImage}
        alt="The iconic builings of Bergen harbour, taken from the water towards land"
      />
    </div>
  );
}

export default Banner;
