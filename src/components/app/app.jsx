import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNav from '../bottom-nav/bottom-nav';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Sports from '../sports/sports';
import Finance from '../finance/finance';
import Robotics from '../robotics/robotics';
import Error from '../error/Error';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#eeeeee',
      width: '100%',
    },
}));

function App () {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route exact path="/about"><About /></Route>
                  <Route exact path="/contact"><Contact /></Route>
                  <Route path="/sports"><Sports /></Route>
                  <Route exact path="/finance"><Finance /></Route>
                  <Route exact path="/robotics"><Robotics /></Route>
                  <Route exact path="/error"><Error /></Route>
                </Switch>
                <BottomNav />

            </div>
        </Router>
    );
}

export default App;
