import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

function SearchScoreboard() {

  const rootStyle = {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minWidth: '240px',
  }

  const inputStyle = {
    marginLeft: 8,
    flex: 1,
  }

  const iconButtonStyle = {
    padding: 10,
  }

  const dividerStyle = {
    height: 28,
    margin: 4,
  }  
  
  return (
    <Paper component="form" style={rootStyle}>
      <InputBase
        style={inputStyle}
        placeholder="Search for your team..."
        inputProps={{ 'aria-label': 'search scoreboard' }}
      />
      <IconButton type="submit" style={iconButtonStyle} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchScoreboard;
