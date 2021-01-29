import React, { Component } from "react";
import "../Stylesheets/Features.css";
import img_utils from "../Media/useful_utilities.png";
import img_mod from "../Media/powerful_moderation.png";

class Features extends Component {
  render() {
    return (
      <section className="my-5 container text-light">
        <div className="pb-5">
          <h2 className="h1-responsive font-weight-bold text-center mt-5">
            Why is it so great?
          </h2>
          <p className="lead grey-text text-center w-responsive mx-auto">
            Moderation, customization, automod, various useful utilities, no
            useless functions and completely open source - that's what makes
            this bot one of the best choices.
          </p>
        </div>

        <hr className="rgba-white-slight my-0" />

        <div className="row hover-scale py-5">
          <div className="col my-auto">
            <div className="row">
              <div className="col-1 pt-2">
                <i className="fas fa-share fa-lg indigo-text" />
              </div>

              <div className="col-xl-10 col-md-11 col-10">
                <h3 className="font-weight-bold mb-3">Powerful moderation</h3>
                <p className="grey-text">
                  Thanks to this bot, the standard moderation functionality will
                  be even more accessible! Warnings when a user is
                  banned/kicked, mutes, changing nicknames, tips, in general,
                  everything that is needed for small and large servers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 text-center text-lg-left my-auto mx-auto">
            <img className="img-fluid img-wrap" src={img_mod} alt="Feature" />
          </div>
        </div>

        <hr className="rgba-white-slight my-0" />

        <div className="row hover-scale py-5">
          <div className="col my-auto">
            <div className="row">
              <div className="col-1 pt-2">
                <i className="fas fa-share fa-lg indigo-text" />
              </div>

              <div className="col-xl-10 col-md-11 col-10">
                <h3 className="font-weight-bold mb-3">Useful utilities</h3>
                <p className="grey-text">
                  Find out more information about user, channel, server than
                  Discord provides. Want to download someone else's avatar? No
                  problem! Want to know when a person signed up? Not a word
                  more!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 text-center text-lg-left my-auto mx-auto order-md-first">
            <img
              className="img-fluid hover img-wrap mb-auto mb-sm-auto mb-md-3 mb-lg-auto"
              src={img_utils}
              alt="Feature"
            />
          </div>
        </div>

        <hr className="rgba-white-slight my-0" />

        <div className="row mx-auto my-5">
          <h3 className="mx-auto text-center">
            <strong>And a lot of more in the future!</strong>
          </h3>
        </div>

        <hr className="rgba-white-slight my-0" />
      </section>
    );
  }
}

export default Features;
