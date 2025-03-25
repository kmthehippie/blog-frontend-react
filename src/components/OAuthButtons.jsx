import React from "react";
import "../styles/oauthButtons.css";

const OAuthButtons = () => {
  const handleGoogleLogin = () => {};
  const handleGithubLogin = () => {};
  return (
    <div className="oauth-buttons">
      <button onClick={handleGoogleLogin}>Google + </button>
      <button onClick={handleGithubLogin}>Github +</button>
    </div>
  );
};

export default OAuthButtons;
