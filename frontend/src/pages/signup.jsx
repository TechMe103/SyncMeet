import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import '../auth.css';
// import signupImage from '../assets/signup-image.jpg'; // You'll need to add your own image

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', formData);
    // Add your registration logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signup with ${provider}`);
    // Add social signup logic here
  };

  return (
    <div className="container">
      <div className="auth-container fade-in">
        {/* Left Side - Image */}
        <div className="image-side">
          <div className="image-overlay">
            <div className="image-content">
              <h2>Already have an account?</h2>
              <p>Sign in to access your personalized dashboard</p>
              <Link to="/login">
                <button className="cta-button">Sign In</button>
              </Link>
            </div>
          </div>
          {/* Add your own image or replace with a background */}
          <div className="image-placeholder">
            <div className="placeholder-content">
              <div className="placeholder-icon">🚀</div>
              <h3>Get Started</h3>
              <p>Join our community and unlock exclusive features</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="form-side">
          <div className="form-wrapper">
            <div className="logo">
              <div className="logo-icon">🌟</div>
              <h1>Create Account</h1>
              <p className="subtitle">Sign up to get started with our service</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="username">
                  <FaUser className="input-icon" />
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="input-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
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
                    placeholder="Create a strong password"
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

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <FaLock className="input-icon" />
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="terms">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                </label>
              </div>

              <button type="submit" className="auth-button">
                Create Account
              </button>

              <div className="divider">
                <span>or sign up with</span>
              </div>

              <div className="social-login">
                <button
                  type="button"
                  className="social-button google"
                  onClick={() => handleSocialSignup('google')}
                >
                  <FaGoogle /> Google
                </button>
                <button
                  type="button"
                  className="social-button github"
                  onClick={() => handleSocialSignup('github')}
                >
                  <FaGithub /> GitHub
                </button>
              </div>

              <p className="auth-switch">
                Already have an account?{' '}
                <Link to="/login" className="switch-link">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;