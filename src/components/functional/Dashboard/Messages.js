import React from "react";

function Messages() {
  return (
    <div className="message__wrap">
      <h2>Messages</h2>
      <div className="message__containter">
          <div className="message__item">
              <h3>Message 1</h3>
              <p>Message content goes here</p>
          </div>
          <hr />
          <div className="message__item">
              <h3>Message 1</h3>
              <p>Message content goes here</p>
          </div>
          <hr />
      </div>
    </div>
  );
}

export default Messages;