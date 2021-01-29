import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../Stylesheets/Intro.css";

class Intro extends Component {
  render() {
    return (
      <section className="text-center bg-image bg">
        <div className="d-flex justify-content-center align-items-center h-50 animated fadeInDown">
          <div className="text-white">
            <h1 className="mb-3">
              <strong>OpenMod</strong>
            </h1>
            <h5 className="mb-4">
              The powerful and feature-rich Discord-bot for moderating servers.
            </h5>

            <div className="container">
              <div className="row align-items-center">
                <a
                  className="btn btn-outline-light btn-lg m-2 col-sm w-100"
                  href="https://discord.com/oauth2/authorize?client_id=738279888674357298&permissions=8&scope=bot"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Invite
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2 col-sm w-100"
                  href="https://docs.open-mod.tk/"
                  target="_blank"
                  role="button"
                >
                  View docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
