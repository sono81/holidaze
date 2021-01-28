import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => setUserName(e.target.value)}
      />

      <label>Password</label>
      <input
        type="passwort"
        name="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
