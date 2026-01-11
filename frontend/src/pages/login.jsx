import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import '../auth.css';
// import loginImage from '../assets/login-image.jpg'; // You'll need to add your own image

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add your authentication logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Add social login logic here
  };

  return (
    <div className="container">
      <div className="auth-container fade-in">
        {/* Left Side - Form */}
        <div className="form-side">
          <div className="form-wrapper">
            <div className="logo">
              <div className="logo-icon">🔐</div>
              <h1>Welcome Back</h1>
              <p className="subtitle">Sign in to your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="usernameOrEmail">
                  <FaUser className="input-icon" />
                  Username or Email
                </label>
                <input
                  type="text"
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  placeholder="Enter your username or email"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <FaLock className="input-icon" />
                  Password
                </label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="auth-button">
                Sign In
              </button>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button
                  type="button"
                  className="social-button google"
                  onClick={() => handleSocialLogin('google')}
                >
                  <FaGoogle /> Google
                </button>
                <button
                  type="button"
                  className="social-button github"
                  onClick={() => handleSocialLogin('github')}
                >
                  <FaGithub /> GitHub
                </button>
              </div>

              <p className="auth-switch">
                Don't have an account?{' '}
                <Link to="/signup" className="switch-link">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="image-side">
          <div className="image-overlay">
            <div className="image-content">
              <h2>New to our platform?</h2>
              <p>Join thousands of users who trust us with their data</p>
              <Link to="/signup">
                <button className="cta-button">Create Account</button>
              </Link>
            </div>
          </div>
          {/* Add your own image or replace with a background */}
          <div className="image-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">✨</div>
              <h3>Secure Login</h3>
              <p>Your data is protected with industry-standard encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;