import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from '../game-card/game-card';

const baseURL = '/ncaa_api/casablanca/scoreboard/';

class Scoreboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount () {
        var url =
                  baseURL +
                  this.props.sport +
                  '/' +
                  this.props.division +
                  '/' +
                  this.props.year +
                  '/' +
                  this.props.month +
                  '/' +
                  this.props.day +
                  '/scoreboard.json';

        console.log(url);
        fetch(url, {
              method: 'GET',
              //body: JSON.stringify()
            })
            .then(response => response.text())
            .then(text => console.log(text))
            //.then(response => response.json())
            //.then(data => {
            //  this.setState({ games: data.games })
            //})
            .catch(error => {
                console.log(error);
            });
    }

    render () {
        const { games } = this.state;

        return (
            <Grid container spacing={1}>
                {games.map(game => (
                    <Grid item key={game.game.gameID}>
                        <GameCard
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
                            startTime={game.game.startTime}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Scoreboard;
