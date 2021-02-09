import React from "react";
import Facebook from "../../images/icons/iconmonstr-facebook-4-64.png";
import Instagram from "../../images/icons/iconmonstr-instagram-14-64.png";
import Pinterest from "../../images/icons/iconmonstr-pinterest-1-64.png";
import Twitter from "../../images/icons/iconmonstr-twitter-4-64.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__adress">
        <p>Holidaze</p>
        <p>Roadway 365b</p>
        <p>5011 Bergen</p>
      </div>

      <div className="footer__adress">
        <p>+47 12 34 56 78</p>
        <p>post@holidaze.nox</p>
      </div>

      <ul className="footer__links">
        <li className="footer__link">
          <img src={Facebook} alt="facebook" className="footer__image" />
        </li>
        <li className="footer__link">
          <img src={Instagram} alt="facebook" className="footer__image" />
        </li>
        <li className="footer__link">
          <img src={Pinterest} alt="facebook" className="footer__image" />
        </li>
        <li className="footer__link">
          <img src={Twitter} alt="facebook" className="footer__image" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
