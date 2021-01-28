import React from "react";

function Enquiries() {
  return (
    <div className="message__wrap">
      <h2>Enquiries</h2>
      <div className="message__containter">
          <div className="message__item">
              <h3>Enquirie 1</h3>
              <p>Enquirie content goes here</p>
          </div>
          <hr />
          <div className="message__item">
              <h3>Enqueirie 2</h3>
              <p>Enquirie content goes here</p>
          </div>
          <hr />
      </div>
    </div>
  );
}

export default Enquiries;