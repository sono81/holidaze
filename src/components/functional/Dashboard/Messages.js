import React from "react";

function Messages() {
  return (
    <div className="message__wrap">
      <h2 className="message__wrap--heading">Messages</h2>
      <div className="message__container">
          <div className="message__item">
              <h3 className="message__item--heading">Message 1</h3>
              <p>Message content goes here</p>
          </div>
          <hr />
          <div className="message__item">
              <h3 className="message__item--heading">Message 1</h3>
              <p>Message content goes here</p>
          </div>
          <hr />
      </div>
    </div>
  );
}

export default Messages;