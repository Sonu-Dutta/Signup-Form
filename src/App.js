import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login_component";
import Signup from "./components/signup_component";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/sign-in" element={<Login />} />
              <Route exact path="/sign-up" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
