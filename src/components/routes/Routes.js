import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Sports from '../sports/sports';
import NcaaGame from '../ncaa-game/NcaaGame';
import Finance from '../finance/finance';
import Robotics from '../robotics/robotics';
import Error from '../error/Error';

function Routes () {
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/test/1" component={Home} />
            <Route exact path="/sports" component={Sports} />
            <Route path="/finance" component={Finance} />
            <Route path="/robotics" component={Robotics} />
            <Route path="/error" component={Error} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
}

export default Routes;
