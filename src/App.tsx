import React from "react";

import "./Stylesheets/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CSS from "csstype";

import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";

import { MDBAnimation, MDBCol, MDBIcon, MDBRow } from "mdbreact";

function App() {
  const s1: CSS.Properties = {
    backgroundImage: "url('https://i.imgur.com/44aldxN.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "40.75vmin",
    paddingTop: "40.75vmin",
  };

  const s2: CSS.Properties = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  };

  return (
    <div className="omba">
      <AppHeader />
      <MDBAnimation type="fadeIn">
        <div className="text-center bg-image" style={s1}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <MDBAnimation type="fadeInUp">
              <div className="text-white">
                <h1 className="mb-3">
                  <strong>OpenMod</strong>
                </h1>
                <h5 className="mb-4">
                  The best Discord-bot for moderating servers.
                </h5>

                <MDBRow center>
                  <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                    role="button"
                    rel="nofollow"
                    target="_blank"
                  >
                    Invite
                  </a>
                  <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                    role="button"
                  >
                    View documentation
                  </a>
                </MDBRow>
              </div>
            </MDBAnimation>
          </div>
        </div>

        <section className="my-5 m-5 text-light">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Why is it so great?
          </h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <MDBRow center>
            <MDBCol md="4">
              <MDBAnimation type="fadeInLeft" reveal>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="flag-checkered"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">International</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda
                      deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>

              <MDBAnimation type="fadeInLeft" reveal>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="flask"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Experimental</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda
                      deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>

              <MDBAnimation type="fadeInLeft" reveal>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="glass-martini"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Relaxing</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda
                      deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation type="fadeInRight" reveal>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="heart"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Beloved</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda
                      deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>

              <MDBAnimation type="fadeInRight" reveal>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="bolt"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Rapid</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda
                      deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>

              <MDBAnimation type="fadeInRight" reveal>
                <MDBRow className="mb-3">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="magic"
                      size="2x"
                      className="deep-purple-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Magical</h5>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores nam, aperiam minima assumenda
                      deleniti hic.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </section>
        <AppFooter />
      </MDBAnimation>
    </div>
  );
}

export default App;
