import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BoxScore from '../boxscore/BoxScore';
import GameBanner from '../game-banner/GameBanner';

const baseURL = '/ncaa_api/casablanca/game/';

class GamePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            gameInfo: {},
            boxscore: [],
            pbp: null,
            preview: null,
            recap: null,
            scoring_summary: null,
            team_stats: null,
        };
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        
        var game_url = baseURL + id + '/';
        var game_info_url = game_url + 'gameInfo.json';
        var boxscore_url = game_url + 'boxscore.json';
        var pbp_url = game_url + 'pbp.json';
        var pbp_url = game_url + 'pbp.json';
        
        fetch(game_info_url, {
              method: 'GET',
              body: JSON.stringify()
        })
        .then(response => response.json())
        .then(data => {
          this.setState({ gameInfo: data });
          console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render () {
        const theme = createMuiTheme();

        const gridStyle = {
        };

        if (!this.state.gameInfo.id) {
          return null;
        }

        return (
          <GameBanner homeName={this.state.gameInfo.home.names.short}
                      homeRecord={this.state.gameInfo.home.record}
                      homeColor={this.state.gameInfo.home.color}
                      homeRank={this.state.gameInfo.home.rank}
                      homeScore={this.state.gameInfo.home.score}
                      awayName={this.state.gameInfo.away.names.short}
                      awayRecord={this.state.gameInfo.away.record}
                      awayColor={this.state.gameInfo.away.color}
                      awayRank={this.state.gameInfo.away.rank}
                      awayScore={this.state.gameInfo.away.score} />
        );
    }
}

export default withRouter(GamePage);
