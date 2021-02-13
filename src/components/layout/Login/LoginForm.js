import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

localStorage.setItem("username", "admin");
localStorage.setItem("password", "login");

const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

function LoginForm() {
  const [usernameInput, setUserName] = useState();
  const [passwordInput, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usernameInput === username && passwordInput === password) {
      history.push("/Dashboard");
    } else {
      alert("Please enter valid username and password");
    }
  };

  const cancel = "<<<";

  return (
    <div className="login__wrapper">
      <form onSubmit={handleSubmit} className="login__card">
        <h2 className="login__heading">Login</h2>
        <label className="login__name">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          className="login__input"
          onChange={(e) => setUserName(e.target.value)}
        />

        <label className="login__name">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login__input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn__login btn--greenthin">
          Submit
        </button>
      </form>
      <NavLink to="/" className="login__cancel">
        {cancel} Cancel
      </NavLink>
    </div>
  );
}

export default LoginForm;
