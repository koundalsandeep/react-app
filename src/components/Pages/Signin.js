import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmailname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmailnameChange = (e) => {
    setEmailname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      console.log("Login successful", response.data);
      setError("");
      sessionStorage.setItem("userData", response.data);
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <h3 className="text-center">Sign In</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className="form-control"
          required
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailnameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="form-control"
          required
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
