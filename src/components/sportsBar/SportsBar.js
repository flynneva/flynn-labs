import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import WcIcon from '@material-ui/icons/Wc';
import AppsIcon from '@material-ui/icons/Apps';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
         KeyboardTimePicker,
         KeyboardDatePicker } from '@material-ui/pickers';
import { useNCAA } from 'react-ncaa-data';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function SportsBar () {
  const [ date, setDate ] = useState(new Date());
  const { month, day, sport, gender, toggleGender, changeDate, games, getGames, loadingGames } = useNCAA();

  const prevDate = usePrevious(date)
  const prevGender = usePrevious(gender)
  const prevSport = usePrevious(sport)

  useEffect(() => {
    if (prevDate !== date) {
      handleRefresh();
    } else if (prevGender !== gender) {
      handleRefresh();
    } else if (prevSport !== sport) {
      handleRefresh();
    }
  })

  const handleBasketball = () => {
    if (gender == 'men' && !loadingGames) {
      getGames('basketball-men');
    } else if (gender == 'women' && !loadingGames) {
      getGames('basketball-women');
    }
  }

  const handleFootball = () => {
    getGames('football');
  }
  
  const handleRefresh = () => {
    if (sport.includes('basketball')) {
      handleBasketball();
    } else if (sport.includes('football')) {
      handleFootball();
    } else if (sport == 'none') {
      console.log('no sport selected..default to basketball');
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
    <AppBar position="static" color="secondary" style={{ minHeight: '48px' }}>
      <Toolbar>
        <Grid container spacing={0} justify="space-between" alignItems="flex-end">
          <Grid item>
            <IconButton color="primary" aria-label="scoreboard" component={RouterLink} to="/sports/ncaa">
              <AppsIcon />
            </IconButton>
	  </Grid>
          <Grid item>
            <Button color="primary" aria-label="gender" onClick={handleGender} startIcon={<WcIcon />} style={{ margin: '8px' }}>
              {gender}
            </Button>
          </Grid>
          <Grid item>
            <Grid item>
              <IconButton color={sport.includes('basketball') ? "primary" : "default" }
                  aria-label="basketball"
                  onClick={handleBasketball}>
                <SportsBasketballIcon />
	      </IconButton>
            </Grid>
          </Grid>
          <Grid item style={{ width: 150 }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-around'>
                <KeyboardDatePicker
                   margin="dense"
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
