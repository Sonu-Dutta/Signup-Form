import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <form className="m-auto col-sm-6 col-lg-4 my-3">
        <h3>
          Sign In <div className="circle"></div>
          <div className="circle circle-1"></div>
        </h3>

        <div className="inner-form">
          <h1>Welcome Back !</h1>
          <p>Sign in to continue</p>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="custom-check1"
              />

              <label
                className="custom-control-label ms-2"
                htmlFor="custom-check1"
              >
                <span className="remember"> Remember me</span>
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className=" btn-1">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
            Don't have an account <Link to="/sign-up">Sign Up? | </Link>
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </form>
    );
  }
}
