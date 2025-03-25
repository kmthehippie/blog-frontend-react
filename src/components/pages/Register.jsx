import React, { useState } from "react";

import "../../styles/loginRegister.css";
import { Link } from "react-router-dom";
import OAuthButtons from "../OAuthButtons";
import axios from "../../api/axios";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cfmPassword, setCfmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Passwords need to be at least 6 characters long");
      return;
    }
    if (password !== cfmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("/auth/register", {
        email,
        name,
        password,
        role,
      });

      if (response.data.success === true) {
        setSuccess(true);
        console.log("Success Account Registered");
      } else {
        console.error("Error from server: ", response.data.message);
        setError(response.data.message || "Failed to register");
      }
    } catch (error) {
      console.error("Axios error: ", error);

      // Handle network or server error
      if (error.response) {
        // Server responded with a status outside the 2xx range
        setError(error.response.data.message || "Server Error");
      } else if (error.request) {
        // Request made but no response received
        setError("No response from server. Please try again later.");
      } else {
        // Something else caused the error
        setError(error.message || "An unexpected error occurred");
      }
    }
  };

  return (
    <div className="parent">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="mini-div">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="yourname@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mini-div">
          <label htmlFor="name">Display Name</label>
          <br />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
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
        <div className="mini-div">
          <label htmlFor="cfmpassword">Confirm Password</label>
          <br />
          <input
            onChange={(e) => setCfmPassword(e.target.value)}
            type="password"
            name="cfmpassword"
            id="cfmpassword"
            placeholder="******"
          />
        </div>

        <div className="mini-div">
          <label htmlFor="role">What role would you like?</label>
          <br />
          <select
            onChange={(e) => setRole(e.target.value)}
            name="role"
            id="role"
            defaultValue=""
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="USER" label="USER">
              USER
            </option>
            <option value="EDITOR" label="EDITOR">
              EDITOR
            </option>
          </select>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>

      {success && (
        <div className="bg-modal">
          <div className="success-modal">
            <p>Success! Account has been registered.</p>
            <p>Head over to:</p>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      )}

      <OAuthButtons />
      {/* Button to login with Google */}
      {/* Button to login with Github */}
    </div>
  );
};

export default Register;
