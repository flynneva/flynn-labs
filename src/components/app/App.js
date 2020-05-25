import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, yellow, red } from '@material-ui/core/colors';
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#11322b',
    },
    secondary: {
      main: '#e3e3e3',
    },
  },
  status: {
    danger: red,
    error: red,
    ok: green,
    warn: yellow,
  },
});

function App () {

    const rootStyle = {
      backgroundColor: '#eeeeee',
      width: '100%',
    }

    return (
        <Router>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </Router>
    );
}

export default App;
