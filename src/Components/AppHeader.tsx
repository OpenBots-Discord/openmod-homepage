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
import { Link } from "react-scroll";

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
          expand="md"
          fixed="top"
          dark
          scrolling
          className="darken-navbar"
        >
          <MDBNavbarBrand>
            <img
              src={logo}
              className={"mr-2"}
              width={22}
              height={22}
              alt={"*Logo*"}
            />
            <strong className="white-text">OpenMod</strong>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link to="test1" smooth={true}>
                  <MDBNavLink to="#!">Features</MDBNavLink>
                </Link>
              </MDBNavItem>

              <MDBNavItem>
                <a
                  className="nav-link waves-light"
                  href="https://discord.com/oauth2/authorize?client_id=738279888674357298&permissions=8&scope=bot"
                >
                  Invite
                </a>
              </MDBNavItem>

              <MDBNavItem>
                <a
                  className="nav-link waves-light"
                  href="https://docs.open-mod.tk/"
                >
                  Documentation
                </a>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink disabled to="#" className="text-white-50">
                  Dashboard
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <a
                  className="nav-link waves-light"
                  href="https://discord.gg/PAWwUB5"
                >
                  Support server
                </a>
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
