﻿import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username_email, setUsername_email] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleUsername_email = (e) => {
    setUsername_email(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username_email !== "" && password !== "") {
      setSubmitted(true);
      navigate('/products');
    }
  };

  return (
    <div className="Login">
      <header className="Login-Register-header">Log In</header>
      <form onSubmit={handleSubmit}>
        <label for="username-email" className="input-label">Username or Email</label>
        <br />
        <input
          id="username-email"
          name="username-email"
          type="text"
          className="text-box"
          value={username_email}
          onChange={handleUsername_email}
          required
        ></input>
        <br />
        <label for="password" className="input-label">Password</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          className="text-box"
          value={password}
          onChange={handlePassword}
          required
        ></input>
        <br />
        <input
          type="submit"
          value="Log In"
          className="button"
        ></input>
        or
        <button onClick={() => navigate('/register')} className="button">
          Register
        </button>
      </form>
    </div>
  );
}