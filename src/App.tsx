import React from "react";
import { Element } from "react-scroll";

import "./Stylesheets/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "mdbreact/dist/mdbreact";

import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";

import Intro from "./Components/Intro";
import Features from "./Components/Features";

function App() {
  return (
    <div className="bg-fill">
      <AppHeader />
      <div className="animated fadeIn">
        <Intro />
        <Element name="test1" className="element">
          <Features />
        </Element>
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
