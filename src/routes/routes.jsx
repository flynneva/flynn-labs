import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/home';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Sports from '../components/sports/sports';
import Finance from '../components/finance/finance';
import Robotics from '../components/robotics/robotics';

function Routes () {
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

export default Routes;
