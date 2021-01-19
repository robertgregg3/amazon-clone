import React, { useState } from "react";
import "../css/Login.css";
import AmazonLogo from "../images/amazon_logo.svg";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
  };
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={AmazonLogo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={handleSignIn}
            className="amazon-standard-button login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree to the Amazon clone by Robert Gregg conditions
          of Use and Sale. This is a demo site so no orders will be processed.{" "}
        </p>
        <button onClick={handleRegister} className="login__registerAccount">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
