import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import BreadCrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SportLevel from '../sport-level/SportLevel';
import SportsBar from '../sportsBar/SportsBar';
import { NCAA } from 'react-ncaa-data';

function Sports () {
    let { path, url } = useRouteMatch();

    const gridStyle = {
      height: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
    };

    const titleStyle = {
      textAlign: 'center',
    };

    const linkStyle = {
      textDecoration: 'none',
    };
 
    return (
    <NCAA>
      <SportsBar />
      <Switch>
        <Route exact path={path}>
          <Grid container spacing={0} direction='column' justify='center' alignItems='center' style={gridStyle}>
            <Grid item style={titleStyle}>
              <Typography variant="h6" gutterBottom>
                Select a level of sport
              </Typography>
            </Grid>
            <Grid item>
              <Link to={`${url}/ncaa`} style={linkStyle}>
                <Button size="large" variant="contained">NCAA</Button>
              </Link>
            </Grid>
          </Grid>
        </Route>           
        <Route path={`${path}/:level`}>
          <SportLevel />
        </Route>
      </Switch>
    </NCAA>
    );
}

export default Sports;
