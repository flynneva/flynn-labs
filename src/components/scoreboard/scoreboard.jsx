import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from '../game-card/game-card';

const baseURL = 'casablanca/scoreboard/'

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };

  }

  componentDidMount() {
    var url = baseURL + 
              this.props.sport + '/' +
              this.props.division + '/' +
              this.props.year + '/' +
              this.props.month + '/' +
              this.props.day + '/scoreboard.json';

    console.log(url);
    fetch(url, {
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
              homeName={game.game.home.names.char6}
              awayName={game.game.away.names.char6}
              gameStatus={ game.game.gameState }
              currentClock={ game.game.contestClock }
              currentPeriod={ game.game.currentPeriod }
              homeScore={ game.game.home.score }
              homeRecord={ game.game.home.description }
              homeRank={ game.game.home.rank }
              awayScore={ game.game.away.score }
              awayRecord={ game.game.away.description }
              awayRank={ game.game.away.rank }
              startDate={ game.game.startDate }
              startTime={ game.game.startTime } 
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Scoreboard;