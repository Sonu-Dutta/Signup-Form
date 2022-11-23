import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <form
        className="m-auto col-sm-6 col-lg-4 my-3"
        onSubmit={this.handleSubmit}
      >
        <h3>
          Sign Up <div className="circle"></div>
          <div className="circle circle-1"></div>
        </h3>

        <div className="inner-form">
          <h1>Hi !</h1>
          <p>Create a new account</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>
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

          <div className="d-grid">
            <button type="submit" className=" btn-1">
              Sign up
            </button>
          </div>

          <div className="forgot-password text-center mt-2">
            Already registered <Link to="/sign-in">Sign In? | </Link>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </form>
    );
  }
}
