import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./register.css";
import { Passie } from "./Passie";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <i className="fas fa-envelope" style={{ color: "#6caef4" }}></i>Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
          type="email"
          placeholder="your_email@cryptotart.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">
          <i className="fas fa-lock" style={{ color: "#6caef4" }}></i>Passie
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />

        <button type="submit">Log In</button>

        <Link to="/passie">
          <button className="forgot-button">Forgot password?</button>
        </Link>
      </form>

      <Link to="/register">
        <button className="link-button">
          <i className="fas fa-heart-broken" style={{ color: "#6caef4" }}></i>No
          Account? Register here!!
          <i className="fas fa-heart" style={{ color: "#6caef4" }}></i>{" "}
        </button>
      </Link>
    </div>
  );
};
