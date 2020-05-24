import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavDrawer from '../nav-drawer/NavDrawer';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Sports from '../sports/Sports';
import Three from '../three/Three';
import { ROS } from 'react-ros';
import Robotics from '../robotics/Robotics';
import Error from '../error/Error';

function App () {

    const rootStyle = {
      backgroundColor: '#eeeeee',
      width: '100%',
    }

    return (
        <Router>
            <div style={rootStyle}>
                <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route exact path="/about"><About /></Route>
                  <Route exact path="/contact"><Contact /></Route>
                  <Route path="/sports"><Sports /></Route>
                  <Route exact path="/robotics"><ROS><Robotics /></ROS></Route>
                  <Route exact path="/three"><Three /></Route>
                  <Route exact path="/error"><Error /></Route>
                </Switch>
            </div>
            <NavDrawer />
        </Router>
    );
}

export default App;
