import React, { useState, useEffect } from "react";

import "../../styles/loginRegister.css";
import { Link } from "react-router-dom";
import OAuthButtons from "../OAuthButtons";
import { axiosPrivate } from "../../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    setError("");
    setSuccess(false);
    e.preventDefault();
    if (email.length < 4 && password.length < 6) {
      setError("Please check your email and password");
      return;
    }
    try {
      const response = await axiosPrivate.post("/auth/login", {
        email,
        password,
      });
      console.log(response);
      if (response.data.success === true) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        setSuccess(true);
      } else setError(response.data.message || "Failed to login");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Server Error");
      } else {
        setError(error.message || "An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        window.location.href = "/profile";
      }, 3000);
    }
  });
  return (
    <div className="parent">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="mini-div">
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="yourname@email.com"
          />
        </div>
        <div className="mini-div">
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="******"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>You have logged in</p>}
      <div className="register">
        <p>
          No account? <Link to="/register">Register here.</Link>
        </p>
      </div>
      <OAuthButtons />
      {/* Button to login with Google */}
      {/* Button to login with Github */}
    </div>
  );
};

export default Login;
