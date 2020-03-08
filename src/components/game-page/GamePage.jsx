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
            isMounted: null,
            renderBoxScore: null,
            lastUpdated: '',
            gameUrl: '',
            gameID: '',
            gameInfo: {},
            boxscore: {},
            pbp: {},
            preview: {},
            recap: {},
            scoring_summary: {},
            team_stats: {},
        };
    }

    getBoxScore () {
      var boxscore_url = this.state.gameUrl + 'boxscore.json';
      fetch(boxscore_url, {
            method: 'GET',
            body: JSON.stringify()
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ boxscore: data });
        this.setState({ renderBoxScore: true });
        this.setState({ lastUpdated: data.updatedTimestamp });
      })
      .catch(error => {
          console.log(error);
      });
    }

    componentDidMount () {
        const id = this.props.match.params.id;
         
        var game_url = baseURL + id + '/';
        this.setState({ gameUrl: game_url});
        this.setState({ gameID: id });
        this.setState({ lastUpdated: 'NOW' });
        this.setState({ isMounted: true });
    }

    async wait() {
      await new Promise(resolve => setTimeout(resolve, 50000));
      
      return 'done';
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.isMounted) {
          if (prevState.lastUpdated !== this.state.lastUpdated) { 
            var game_info_url = this.state.gameUrl + 'gameInfo.json';
            fetch(game_info_url, {
                  method: 'GET',
                  body: JSON.stringify()
            })
            .then(response => response.json())
            .then(data => {
              this.setState({ gameInfo: data });
              if(data.tabs.boxscore) {
                this.getBoxScore();
              }
            })
            .catch(error => {
                console.log(error);
            });
          } else {
            this.wait().then(result => {
              this.setState({ lastUpdated: 'NOW' });
            });
          }
        }
    }

    render () {
        const theme = createMuiTheme();

        const gridStyle = {
          height: '100%',
          minHeight: '100vh',
          width: '100vw',
          paddingBottom: '75px',
        };
        
        const innerGridStyle = {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100vw',
        };
        
        const itemStyle = {
          margin: 0,
          padding: 0,
          height: '120px',
          width: '100vw',
        };
        
        const gameDetailsStyle = {
          margin: 0,
          padding: 0,
          width: '100vw',
        };

        if (!this.state.gameInfo.id) {
          return null;
        }

        let boxScore;
        let homeMetaData;
        let awayMetaData;
        let homeBoxScore;
        let awayBoxScore;
        if(this.state.boxscore.inputMD5Sum) {
          if (this.state.boxscore.meta.teams['0'].homeTeam) {
            // home team is team 0
            homeMetaData = this.state.boxscore.meta.teams['0'];
            awayMetaData = this.state.boxscore.meta.teams['1'];         
          } else {
            homeMetaData = this.state.boxscore.meta.teams['1'];
            awayMetaData = this.state.boxscore.meta.teams['0'];
          }

          if (homeMetaData.id === this.state.boxscore.teams['0'].teamId) {
            // home team is first in list 
            homeBoxScore = this.state.boxscore.teams['0'];         
            awayBoxScore = this.state.boxscore.teams['1'];
          } else {
            homeBoxScore = this.state.boxscore.teams['1'];         
            awayBoxScore = this.state.boxscore.teams['0'];
          } 
       
          if(this.state.renderBoxScore) {
            boxScore = (
              <BoxScore gameID={this.state.gameID}
                        homeInfo={homeMetaData}
                        awayInfo={awayMetaData}
                        homeBox={homeBoxScore}
                        awayBox={awayBoxScore} />
            );
          }
        }
     
        return (
        <Grid container spacing={0} style={gridStyle}>
          <Grid container spacing={0} style={innerGridStyle}>
            <Grid item style={itemStyle}>
              <GameBanner homeName={this.state.gameInfo.home.names['6Char']}
                      homeRecord={this.state.gameInfo.home.record}
                      homeColor={this.state.gameInfo.home.color}
                      homeRank={this.state.gameInfo.home.rank}
                      homeScore={this.state.gameInfo.home.score}
                      awayName={this.state.gameInfo.away.names['6Char']}
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
                      venueCity={this.state.gameInfo.venue.city}
                      venueName={this.state.gameInfo.venue.name}
                      venueState={this.state.gameInfo.venue.state} />
            </Grid>
            <Grid item justify='center' style={gameDetailsStyle}>
              {boxScore} 
            </Grid>
          </Grid>
        </Grid>
        );
    }
}

export default withRouter(GamePage);
