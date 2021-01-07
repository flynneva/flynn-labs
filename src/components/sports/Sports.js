import React from 'react';
import { Switch, Route, Link, Redirect, useParams, useRouteMatch } from 'react-router';
import Grid from '@material-ui/core/Grid';
import SportsBar from '../sportsBar/SportsBar';
import Scoreboard from '../scoreboard/Scoreboard';
import GamePage from '../game-page/GamePage';
import { NCAA } from 'react-ncaa-data';

function Sports () {
    let { path, url } = useRouteMatch();

    return (
    <NCAA>
      <SportsBar />
      <Switch>
        <Route path={`${path}/game/:id`}>
          <GamePage />
        </Route>
        <Route exact path={`${path}`}><Scoreboard /></Route>
        <Redirect exact from={`${path}/game`} to={`${path}`} />
      </Switch>
    </NCAA>
    );
}

export default Sports;
