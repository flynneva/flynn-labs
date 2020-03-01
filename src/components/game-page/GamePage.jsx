import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BoxScore from '../boxscore/BoxScore';
import GameBanner from '../game-banner/GameBanner';
import ClockBanner from '../clock-banner/ClockBanner';

const baseURL = '/ncaa_api/casablanca/game/';

class GamePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            gameUrl: '', 
            gameInfo: {},
            boxscore: {},
            pbp: {},
            preview: {},
            recap: {},
            scoring_summary: {},
            team_stats: {},
        };
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        
        var game_url = baseURL + id + '/';
        this.setState({ gameUrl: game_url});
        var game_info_url = game_url + 'gameInfo.json';
        var pbp_url = game_url + 'pbp.json';
        var pbp_url = game_url + 'pbp.json';
        
        fetch(game_info_url, {
              method: 'GET',
              body: JSON.stringify()
        })
        .then(response => response.json())
        .then(data => {
          this.setState({ gameInfo: data });
        })
        .catch(error => {
            console.log(error);
        });
    }

    getBoxScore () {
        if(this.state.gameInfo.tabs.boxscore) {
          var boxscore_url = this.state.gameUrl + 'boxscore.json';
          fetch(boxscore_url, {
                method: 'GET',
                body: JSON.stringify()
          })
          .then(response => response.json())
          .then(data => {
            this.setState({ boxscore: data });
            console.log(data);
          })
          .catch(error => {
              console.log(error);
          });
        }
    }
 
    render () {
        const theme = createMuiTheme();

        const gridStyle = {
          height: '100%',
          minHeight: '100vh',
          width: '100vw',
        };
        
        const itemStyle = {
          margin: 0,
          padding: 0,
        };

        if (!this.state.gameInfo.id) {
          return null;
        }

        return (
          <Grid container spacing={0} style={gridStyle}>
            <Grid item style={itemStyle}>
              <GameBanner homeName={this.state.gameInfo.home.names['short']}
                      homeRecord={this.state.gameInfo.home.record}
                      homeColor={this.state.gameInfo.home.color}
                      homeRank={this.state.gameInfo.home.rank}
                      homeScore={this.state.gameInfo.home.score}
                      awayName={this.state.gameInfo.away.names['short']}
                      awayRecord={this.state.gameInfo.away.record}
                      awayColor={this.state.gameInfo.away.color}
                      awayRank={this.state.gameInfo.away.rank}
                      awayScore={this.state.gameInfo.away.score}
                      gameState={this.state.gameInfo.status.gameState}
                      gameClock={this.state.gameInfo.status.clock}
                      gamePeriod={this.state.gameInfo.status.currentPeriod}
                      startTime={this.state.gameInfo.status.startTime}
                      winner={this.state.gameInfo.status.winner}
                      network={this.state.gameInfo.status.network}
                      venueCity={this.state.gameInfo.venue.City}
                      venueName={this.state.gameInfo.venue.Name}
                      venueState={this.state.gameInfo.venue.State} />
            </Grid>
            <Grid item>
              <BoxScore />
            </Grid>
          </Grid>
        );
    }
}

export default withRouter(GamePage);
