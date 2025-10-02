import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Simulated login
    setIsLoggedIn(true);
    alert("✅ Login successful!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Login</button>
      </form>

      {/* 👇 Add this below the form */}
      <p style={{ marginTop: "10px" }}>
        <button 
          onClick={() => navigate("/forgot-password")} 
          className="link-btn"
        >
          Forgot Password?
        </button>
      </p>
    </div>
  );
}
