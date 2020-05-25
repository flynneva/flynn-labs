import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GameCard from '../game-card/game-card';

const baseURL = '/ncaa_api/casablanca/game/';

class GameInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            game_info: [],
            boxscore: [],
            pbp: [],
            preview: [],
            recap: [],
            scoring_summary: [],
            team_stats: []
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
              this.setState({ game_info: data })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
        const { game_info } = this.state;

        const theme = createMuiTheme();

        const gridStyle = {
        };
 
        return (
            <Grid container spacing={0} justify='center' alignItems='flex-start' style={gridStyle}>
              {game_info.id}
            </Grid>
        );
    }
}

export default withRouter(GameInfo);
