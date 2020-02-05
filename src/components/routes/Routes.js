import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Sports from '../sports/sports';
import Finance from '../finance/finance';
import Robotics from '../robotics/robotics';

function AppRoutes () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/sports" component={Sports} />
            <Route path="/finance" component={Finance} />
            <Route path="/robotics" component={Robotics} />
        </Switch>
    );
}

export default AppRoutes;
