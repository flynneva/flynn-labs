import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GameCard from '../game-card/GameCard';

import { useNCAA } from 'react-ncaa-data';

function Scoreboard () {
  const { games, sport } = useNCAA();
 
  let game_cards;

  if (games.length > 0) {
    game_cards = games.map(game => (
      <Grid item key={game.game.gameID}>
        <GameCard
          sport={sport}
          gameID={game.game.url}
          homeName={game.game.home.names.char6}
          awayName={game.game.away.names.char6}
          gameStatus={game.game.gameState}
          currentClock={game.game.contestClock}
          currentPeriod={game.game.currentPeriod}
          homeScore={game.game.home.score}
          homeRecord={game.game.home.description}
          homeRank={game.game.home.rank}
          awayScore={game.game.away.score}
          awayRecord={game.game.away.description}
          awayRank={game.game.away.rank}
          startDate={game.game.startDate}
          startTime={game.game.startTime} />
      </Grid> ));
  } else {
    game_cards = 
        <Grid item>
          <Paper style={{ margin: '8px', padding: '8px', textAlign: 'center'}}>
            <Typography>
              No games seem to be scheduled for the date selected.
            </Typography>
            <Typography>
              Please select another date.
            </Typography>
          </Paper>
        </Grid>
  }

  return (
  <Grid container spacing={0} justify='center' alignItems='center'>
    {game_cards}
  </Grid>
  );
}

export default Scoreboard;
