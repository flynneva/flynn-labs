import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/about";
import Sports from "../sports/sports";
import Finance from "../finance/finance";
import Robotics from "../robotics/robotics";

function AppSwitch () {
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/sports">
      <Sports />
    </Route>
    <Route path="/finance">
      <Finance />
    </Route>
    <Route path="/robotics">
      <Robotics />
    </Route>
  </Switch>
}

export default AppSwitch
