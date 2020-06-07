import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SportsBasketball from '@material-ui/icons/SportsBasketball';
import WcIcon from '@material-ui/icons/Wc';
import BackspaceIcon from '@material-ui/icons/Backspace';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
         KeyboardTimePicker,
         KeyboardDatePicker } from '@material-ui/pickers';
import { useNCAA } from 'react-ncaa-data';


function SportsBar () {
  const [ date, setDate ] = useState(new Date());
  const { month, day, sport, gender, toggleGender, changeDate, games, getGames } = useNCAA();

  const handleBasketball = () => {
    if (gender == 'men') {
      getGames('basketball-men');
    } else if (gender == 'women') {
      getGames('basketball-women');
    }
  }

  const handleRefresh = () => {
    console.log(sport);
    if(sport.includes('basketball')) {
      handleBasketball();
    }
  }

  const handleGender = () => {
    toggleGender();
  }
  
  const handleDateChange = (new_date) => {
    setDate(new_date);
    changeDate(new_date);
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container spacing={1} justify="space-between" alignItems="flex-end">
          <Grid item>
            <Button color="primary" aria-label="back" component="span" href="/sports/ncaa" startIcon={<BackspaceIcon />} style={{ marginBottom: '8px' }}>
              Scoreboard
            </Button>
	  </Grid>
          <Grid item>
            <Button color="primary" aria-label="gender" component="span" onClick={handleGender} startIcon={<WcIcon />} style={{ margin: '8px' }}>
              {gender}
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary"
                    variant="contained"
                    aria-label="basketball"
                    component="span"
                    onClick={handleBasketball}
                    startIcon={<SportsBasketball />}
                    disabled={sport.includes('basketball')}
                    style={{ marginBottom: '8px' }}>
              Basketball
            </Button>
          </Grid>
          <Grid item style={{ width: 150 }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-around'>
                <KeyboardDatePicker
                   margin="normal"
                   id="date-picker-dialog"
                   label="Pick a date"
                   format="MM/dd/yyyy"
                   value={date}
                   onChange={handleDateChange}
                   KeyboardButtonProps={{
                     'aria-label': 'change date',
                   }} />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default SportsBar;
