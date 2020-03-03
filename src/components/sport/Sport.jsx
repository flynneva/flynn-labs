import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Scoreboard from '../scoreboard/Scoreboard';
import GamePage from '../game-page/GamePage';
import SearchScoreboard from '../search-scoreboard/SearchScoreboard';

function Sport () {
    let { path, url } = useRouteMatch();

    let { sport } = useParams();

    const gridStyle = {
      height: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      paddingTop: 16,
      marginBottom: '75px',
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
          <Grid container justify='center' style={{ position: 'fixed', top: 16 }}>
            <SearchScoreboard />
          </Grid>
          <Grid container style={gridStyle} justify='center' direction='column'>
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
