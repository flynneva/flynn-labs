import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from '../game-card/game-card';

const baseURL = 'casablanca/scoreboard/'
const DEFAULT_QUERY = 'basketball-men/d1/2019/12/23/scoreboard.json'

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };

  }

  componentDidMount() {
    fetch(baseURL + DEFAULT_QUERY, {
        crossDomain: true,
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify()
      })
      .then(response => response.json())
      .then(data => this.setState({ games: data.games }));
  }
  

  render() {
    const { games } = this.state;

    return (
      <Grid container spacing={1}>
        { games.map(game => (
          <Grid item spacing={2}>
            <GameCard
              homeTeam={game.game.home.names.char6} 
              awayTeam={game.game.away.names.char6} 
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Scoreboard;
