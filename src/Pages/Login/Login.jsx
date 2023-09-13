import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have a Login.css file

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPass = localStorage.getItem("pass");

    if (email === storedEmail && pass === storedPass) {
      alert("Login Successful");
      // Navigate to a different route or perform any other actions upon successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-heading">Login to Your Account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
