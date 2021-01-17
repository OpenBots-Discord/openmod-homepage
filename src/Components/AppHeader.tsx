import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../logo.svg";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "../Stylesheets/Header.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";

class AppHeader extends Component {
  toggleCollapse: () => void;
  state: { isOpen: boolean };

  constructor() {
    super(Component);
    this.state = {
      isOpen: false,
    };

    this.toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
  }

  render() {
    return (
      <Router>
        <MDBNavbar
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
          className="darken-navbar"
        >
          <MDBNavbarBrand>
            <img
              src={logo}
              className={"mr-2"}
              width={30}
              height={30}
              alt={"*Logo*"}
            />
            <strong className="white-text">OpenMod</strong>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="#!">Features</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="#!">Invite</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="#!">Documentation</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="#!">Dashboard</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="#!">Support server</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                <a
                  className="nav-link waves-light"
                  href="https://github.com/OpenBots-Discord/OpenMod"
                >
                  <MDBIcon fab icon="github" />
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default AppHeader;
