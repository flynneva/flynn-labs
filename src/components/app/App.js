import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, yellow, red } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
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
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/sports/ncaa' component={Sports} />
            <Redirect from='/sports' to='/sports/ncaa' />
            <Route path='/robotics'><ROS><Robotics /></ROS></Route>
            <Route path='/three' component={Three} />
            <Route path='/error' component={Error} />
            <Route path='/home' component={Home} />
            <Redirect from='/' to='/home' />
          </Switch>
        </div>
        <NavDrawer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
