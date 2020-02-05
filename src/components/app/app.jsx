import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNav from '../bottom-nav/bottom-nav';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1)
    },
    paper: {
        height: '90vh',
        width: '100%',
        textAlign: 'center',
        paddingBottom: 0
    }
}));

function App () {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Paper elevation={1} className={classes.paper}>
                    <Routes />
                </Paper>
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
