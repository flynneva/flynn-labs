import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNav from '../bottom-nav/bottom-nav';

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
                <Routes />
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
