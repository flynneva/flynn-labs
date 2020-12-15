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
    background: {
      paper: '#eeeeee',
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
    width: '100%',
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact'><Contact /></Route>
            <Route path='/sports/ncaa'><Sports /></Route>
            <Route path='/robotics'><ROS><Robotics /></ROS></Route>
            <Route path='/three'><Three /></Route>
            <Route path='/error'><Error /></Route>
          </Switch>
        </div>
        <NavDrawer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
