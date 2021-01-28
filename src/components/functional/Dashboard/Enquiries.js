import React from "react";

function Enquiries() {
  return (
    <div className="message__wrap">
      <h2 className="message__wrap--heading">Enquiries</h2>
      <div className="message__container">
          <div className="message__item">
              <h3 className="message__item--heading">Enquirie 1</h3>
              <p>Enquirie content goes here</p>
          </div>
          <hr />
          <div className="message__item">
              <h3 className="message__item--heading">Enqueirie 2</h3>
              <p>Enquirie content goes here</p>
          </div>
          <hr />
      </div>
    </div>
  );
}

export default Enquiries;