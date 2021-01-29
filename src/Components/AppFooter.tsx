import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class AppFooter extends Component {
  render() {
    return (
      <Router>
        <div
          className="footer-copyright text-center py-3 text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        >
          <div className="container-fluid">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://arslee.tk/" style={{ color: "#fff" }}>
              <strong> arslee.tk </strong>
            </a>
          </div>
        </div>
      </Router>
    );
  }
}

export default AppFooter;
