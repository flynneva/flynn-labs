import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GameCard from '../game-card/game-card';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const baseURL = '/ncaa_api/casablanca/scoreboard/';

const today = new Date();

class Scoreboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            games: [],
            year: '',
            month: '',
            day: '',
            selectedDate: new Date(),
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount () {

        var tempDay = ('0' + today.getDate()).slice(-2);
        var tempMonth = ('0' + (today.getMonth() + 1)).slice(-2);
        var tempYear = today.getFullYear();
     
        this.setState({ selectedDate: today }); 
        this.setState({ day: tempDay });
        this.setState({ month: tempMonth });
        this.setState({ year: tempYear });
    }

    handleDateChange (date) {
        var tempDay = ('0' + date.getDate()).slice(-2);
        var tempMonth = ('0' + (date.getMonth() + 1)).slice(-2);
        var tempYear = date.getFullYear();
     
        this.setState({ selectedDate: date }); 
        this.setState({ day: tempDay });
        this.setState({ month: tempMonth });
        this.setState({ year: tempYear });
    }
 
    componentDidUpdate(prevProps, prevState) {

        var url =
                  baseURL +
                  this.props.sport +
                  '/' +
                  this.props.division +
                  '/' +
                  this.state.year +
                  '/' +
                  this.state.month +
                  '/' +
                  this.state.day +
                  '/scoreboard.json';

        //console.log(url);
        fetch(url, {
              method: 'GET',
              body: JSON.stringify()
            })
            .then(response => response.json())
            .then(data => {
              this.setState({ games: data.games })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
        const { games, selectedDate } = this.state;

        const gridStyle = {
        };
 
        return (
            <Grid container spacing={0} justify='center' alignItems='flex-start' direction='column' style={gridStyle}>
               <Grid item style={{ width: '100vw' }}>
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                   <Grid container justify='space-around'>
                     <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }} />
                   </Grid>
                 </MuiPickersUtilsProvider>
               </Grid>
               <Grid item>
                 <Grid container spacing={0} justify='center' alignItems='flex-start' style={gridStyle}>
                    {games.map(game => (
                       <Grid item key={game.game.gameID}>
                           <GameCard
                               sport={this.props.sport}
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
                               startTime={game.game.startTime}
                           />
                       </Grid>
                     ))}
                 </Grid>
               </Grid>
             </Grid>
        );
    }
}

export default Scoreboard;
