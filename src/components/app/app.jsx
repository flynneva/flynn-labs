import React from 'react';
import './app.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppSwitch from '../app-switch/app-switch';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavDrawer from '../nav-drawer/nav-drawer';
const useStyles = makeStyles(theme => ({
  root: {
    margin: 8,
    height: '100%',
  },
  item: {
    height: '100%',
  },
  paper: {
    height: '94vh',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} className={classes.item}>
            <NavDrawer />
            <Paper className={classes.paper}> 
              <AppSwitch />
            </Paper>
          </Grid>
        </Grid>
        <footer>
          © 2020 Evan Flynn
        </footer>
      </div>
    </Router>
  );
}

export default App;
