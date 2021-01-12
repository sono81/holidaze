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

      <div className="banner__textbox">
          This is some text that will show up in the banner
      </div>
    </div>
  );
}

export default Banner;
