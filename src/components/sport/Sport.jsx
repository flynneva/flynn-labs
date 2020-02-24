import React from 'react';
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Scoreboard from '../scoreboard/Scoreboard';

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
        <div>
            <Switch>
              <Route exact path={path}>
                <Scoreboard
                        sport={sport}
                        division="d1"
                        day={('0' + today.getDate()).slice(-2)}
                        month={('0' + (today.getMonth() + 1)).slice(-2)}
                        year={today.getFullYear()} />
              </Route>           
            </Switch>
        </div>
    );
}

export default Sport;
