import React, { useState, useEffect, Fragment } from "react";
import { GET_ENQUIRIES } from "../../../constants/api";

function Enquiries() {
  const [data, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GET_ENQUIRIES)
      .then((response) => response.json())
      .then((json) => {
        setEnquiries(json);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="message__wrap">
      <h2 className="message__wrap--heading">Enquiries</h2>
      <div className="message__container">
        <div className="message__item">
          {data.map((enquiries) => {
            const {
              checkin,
              checkout,
              clientName,
              email,
              establishment,
            } = enquiries;
            return (
              <Fragment key={email}>
                <h3 className="message__item--heading">{establishment}</h3>
                <p>
                  <b>Name:</b> {clientName}
                </p>
                <p>
                  <b>Email:</b> {email}
                </p>
                <p>
                  <b>Check in:</b> {checkin}
                </p>
                <p>
                  <b>Check out:</b> {checkout}
                </p>
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Enquiries;
