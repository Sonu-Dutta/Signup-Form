import React, { Component } from "react";
import { Link } from "react-router-dom";
import Homeimg from "./home.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="Home">
          <div className="home-img">
            <img src={Homeimg} alt="img" />
          </div>

          <div className="home-btns">
            <h1 className="fs-3">Hello !</h1>
            <p className="text-muted welcome">
              Welcome to our amazing website Login / Signup to continue
            </p>

            <div className="d-grid">
              <button type="submit" className="btn btn-1 btn-3">
                <Link to="/sign-up">Sign up</Link>
              </button>
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-1 btn-2 btn-4">
                <Link to="/sign-in">Sign in</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
