import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sport from '../sport/Sport';

function SportLevel () {
    let { path, url } = useRouteMatch();

    let { level } = useParams();

    const gridStyle = {
      height: '100vh',
      margin: 0,
      padding: 0,
    };

    const titleStyle = {
      width: '75%',
      textAlign: 'center',
    };

    const linkStyle = {
      textDecoration: 'none',
    };
 
    return (
      <Switch>
        <Route exact path={path}>
          <Grid container spacing={0} direction='column' justify='center' alignItems='center' style={gridStyle}>
            <Grid item style={titleStyle}>
              <Typography variant="h6" gutterBottom>
                Great! Now select a sport
              </Typography>
            </Grid>
            <Grid item>
              <Link to={`${url}/basketball-men`} style={linkStyle}>
                <Button size="large" variant="contained">Men's Basketball</Button>
              </Link>
            </Grid>
          </Grid>
        </Route>           
        <Route path={`${path}/:sport`}>
          <Sport />
        </Route>
      </Switch>
    );
}

export default SportLevel;
