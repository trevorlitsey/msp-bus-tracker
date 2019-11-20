import React from "react";
import { Router } from "@reach/router";
import App from "../components/App";

const IndexPage = () => (
  <Router>
    <App path="/" />
    <App path="/:route" />
    <App path="/:route/:direction" />
    <App path="/:route/:direction/:stop" />
  </Router>
);

export default IndexPage;
