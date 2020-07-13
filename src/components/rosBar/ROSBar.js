import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import { ROS, useROS } from 'react-ros';

function ROSBar () {
  const { url, changeUrl, isConnected, toggleConnection, topics, createListener } = useROS();

  const [ vizTopic, setVizTopic ] = useState('');

  const barStyle = {
    width: '100vw',
    height: '60px',
    margin: 0,
    padding: 0,
  }

  const handleTopic = (event) => {
    for (var i in topics) {
      if (topics[i].path === event.target.value) {
        setVizTopic(event.target.value);
      }
    }
  }

  return (
    <AppBar position="static" color="secondary" style={barStyle}>
      <Toolbar>
        <Grid container spacing={1} justify="space-between">
          <Grid item>
            <TextField id="topicInput"
                       select
                       value={ vizTopic }
                       onChange={handleTopic}
                       helperText="Select Topic to Vizualize"
                       style={{ width: '250px' }}>
              {topics.map((option) => (
                  <MenuItem key={option.path} value={option.path}>
                    {option.path}
                  </MenuItem> ))}
            </TextField>
          </Grid>
          <Grid item>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <Input name="urlInput" defaultValue={ url } onChange={event => changeUrl(event.target.value)} startAdornment={ isConnected ? <LinkIcon color="primary"  style={{ paddingRight: '4px' }}/> : <LinkOffIcon color="primary" style={{ paddingRight: '4px' }}/> } />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={toggleConnection}>
                  { isConnected ? "Disconnect" : "Connect" }
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default ROSBar;
