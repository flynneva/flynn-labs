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
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/finance" component={Finance} />
            <Route exact path="/robotics" component={Robotics} />
        </Switch>
    );
}

export default AppSwitch;
