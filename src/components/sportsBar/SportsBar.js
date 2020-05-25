import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
         KeyboardTimePicker,
         KeyboardDatePicker } from '@material-ui/pickers';
import SearchScoreboard from '../search-scoreboard/SearchScoreboard';

function SportsBar () {
  const [ date, setDate ] = useState(new Date());
  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');
  const [ lastUpdated, setLastUpdated] = useState('');

  const handleDateChange = (new_date) => {
    var tempDay = ('0' + new_date.getDate()).slice(-2);
    var tempMonth = ('0' + (new_date.getMonth() + 1)).slice(-2);
    var tempYear = new_date.getFullYear();

    setDate(new_date);
    setDay(tempDay);
    setMonth(tempMonth);
    setYear(tempYear);
    setLastUpdated('NOW');
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container spacing={1} justify="flex-end">
          <Grid item>
	    <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-around'>
                <KeyboardDatePicker
                   margin="normal"
                   id="date-picker-dialog"
                   label="Date picker dialog"
                   format="MM/dd/yyyy"
                   value={date}
                   onChange={handleDateChange}
                   KeyboardButtonProps={{
                     'aria-label': 'change date',
                   }} />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
	  <Grid item style={{ marginTop: '12px' }}>
            <SearchScoreboard />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default SportsBar;
