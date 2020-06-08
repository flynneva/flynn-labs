import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SportsBar from '../sportsBar/SportsBar';
import Scoreboard from '../scoreboard/Scoreboard';
import GamePage from '../game-page/GamePage';
import { NCAA } from 'react-ncaa-data';

function Sports () {
    let { path, url } = useRouteMatch();

    const gridStyle = {
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
          <Grid container style={gridStyle} justify='center' direction='column'>
            <Grid item>
              <Scoreboard />
            </Grid>
          </Grid>
        </Route>
        <Route path={`${path}/game/:id`}>
          <GamePage />
        </Route>
      </Switch>
    </NCAA>
    );
}

export default Sports;
