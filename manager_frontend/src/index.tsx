import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import "./index.css";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Mint from "./pages/Mint";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import reportWebVitals from "./reportWebVitals";
import getLibrary from './hooks/getLibrary';

AOS.init();

ReactDOM.render(
  
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>

    <Router>
      <Layout>
        <Switch>
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/aboutus" component={About} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/mint" component={Mint} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
