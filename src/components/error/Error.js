import React from 'react';
import { Router } from 'react-router';
import Paper from '@material-ui/core/Paper';
import NavDrawer from '../nav-drawer/NavDrawer';

function Error () {
    
    const rootStyle = {
        margin: theme.spacing(1)
    }

    const paperStyle = {
        height: '90vh',
        width: '100%',
        textAlign: 'center',
        paddingBottom: 0
    }

    return (
        <Router>
            <div style={rootStyle}>
                <Paper elevation={1} style={paperStyle}>
                 Oops! Something went wrong....check back soon and hopefully this will be fixed.
                </Paper>
                <NavDrawer />
            </div>
        </Router>
    );
}

export default Error;
