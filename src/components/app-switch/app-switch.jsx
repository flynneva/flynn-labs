import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Sports from '../sports/sports';
import Finance from '../finance/finance';
import Robotics from '../robotics/robotics';

function AppSwitch () {
  return (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/sports' component={Sports}></Route>
    <Route exact path='/finance' component={Finance}></Route>
    <Route exact path='/robotics' component={Robotics}></Route>
  </Switch>
  );
}

export default AppSwitch;
