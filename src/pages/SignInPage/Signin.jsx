import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './Signin.css';

const Signin = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      <NavBar />
      <div className="signin-container">
        {showLoginForm ? (
          <div className="form-container" id="login-form">
            <h2 class="heading">Login</h2>
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <button class="button" type="submit">Sign In</button>
            </form>
            <p class="para">
              Don't have an account?{' '}
              <span class="btn-btn" onClick={handleToggleForm} id="signup-link">
                Sign Up
              </span>
            </p>
          </div>
        ) : (
          <div className="form-container" id="signup-form">
            <h2 class="heading">Register</h2>
            <form>
              <label htmlFor="new-username">Username</label>
              <input type="text" id="new-username" name="new-username" required />
              <label htmlFor="new-email">Email</label>
              <input type="email" id="new-email" name="new-email" required />
              <label htmlFor="new-password">Password</label>
              <input type="password" id="new-password" name="new-password" required />
              <button class="button" type="submit">Sign Up</button>
            </form>
            <p class="para">
              Already have an account?{' '}
              <span class="btn-btn" onClick={handleToggleForm} id="login-link">
                Sign in
              </span>
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Signin;
