import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Scoreboard from '../scoreboard/Scoreboard';
import GamePage from '../game-page/GamePage';

function Sport () {
    let { path, url } = useRouteMatch();

    let { sport } = useParams();

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

    const today = new Date();
    return (
      <Switch>
        <Route exact path={path}>
          <Grid container style={gridStyle} justify='center'>
            <Grid item>
               <Scoreboard
                      sport={sport}
                      division="d1"
                      day={('0' + today.getDate()).slice(-2)}
                      month={('0' + (today.getMonth() + 1)).slice(-2)}
                      year={today.getFullYear()} />
            </Grid>
          </Grid>
        </Route>
        <Route path={`${path}/game/:id`}>
          <GamePage />
        </Route>
      </Switch>
    );
}

export default Sport;
