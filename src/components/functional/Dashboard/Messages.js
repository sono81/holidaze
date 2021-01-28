import React, { useState, useEffect, Fragment } from "react";
import { GET_MESSAGES } from "../../../constants/api";

function Messages() {
  const [data, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GET_MESSAGES)
      .then((response) => response.json())
      .then((json) => {
        setMessages(json);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="message__wrap">
      <h2 className="message__wrap--heading">Messages</h2>
      <div className="message__container">
        <div className="message__item">{
            data.map((messages) => {
              const {clientName, email, message} = messages;
              return (
                <Fragment key={email}>
                <h3 className="message__item--heading">{clientName}</h3>
                <p><b>Email:</b> {email}</p>
                <p><b>Message:</b> {message}</p>
                <hr />
                </Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Messages;
