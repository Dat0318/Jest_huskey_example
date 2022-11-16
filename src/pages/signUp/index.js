import React from 'react';
import axios from 'axios';
import './signUp.css';

export function SignUp(props) {
  const changeAuthMode = () => {};

  return (
    <div className="Auth-form-container">
      <form className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="text-center">
          Already registered?{' '}
          <span className="link-primary" onClick={changeAuthMode}>
            Sign In
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Full Name</label>
          <input type="email" className="form-control mt-1" placeholder="e.g Jane Doe" />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input type="email" className="form-control mt-1" placeholder="Email Address" />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input type="password" className="form-control mt-1" placeholder="Password" />
        </div>
        <div className="d-grid gap-2 m-auto mt-4 w-50">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
        <p className="text-center mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
