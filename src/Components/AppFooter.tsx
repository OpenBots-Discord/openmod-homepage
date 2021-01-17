import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class AppFooter extends Component {
  render() {
    return (
      <Router>
        <MDBFooter className="font-small pt-4 dark-grey-text">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://arslee.tk/"> arslee.tk </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Router>
    );
  }
}

export default AppFooter;
