import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';

import { useNCAA } from 'react-ncaa-data';

function GamePage (props) {
  const { sport, getGameInfo, gameInfo, getBoxScore, getPbP } = useNCAA();

  function handleClick () {
    getGameInfo(props.match.params.id);
    console.log(gameInfo);
  }

  return (
    <Grid container>
      <Grid item>
        <button onClick={handleClick}>refresh</button>
      </Grid>
    </Grid>
  );
}

export default withRouter(GamePage);
