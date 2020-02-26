import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BoxScore from '../boxscore/BoxScore';
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
            <Grid container spacing={0} justify='center' alignItems='flex-start' style={gridStyle}>
              <Grid item>
                <p>{this.state.gameInfo.home.names.short}</p>
                <p>{this.state.gameInfo.home.color}</p>
                <p>{this.state.gameInfo.home.rank}</p>
                <p>{this.state.gameInfo.home.record}</p>
                <p>{this.state.gameInfo.home.score}</p>
              </Grid>
              <Grid item>
                <p>{this.state.gameInfo.away.names.short}</p>
                <p>{this.state.gameInfo.away.color}</p>
                <p>{this.state.gameInfo.away.rank}</p>
                <p>{this.state.gameInfo.away.record}</p>
                <p>{this.state.gameInfo.away.score}</p>
              </Grid>
            </Grid>
        );
    }
}

export default withRouter(GamePage);
