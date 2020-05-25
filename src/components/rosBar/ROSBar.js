import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import { ROS, useROS } from 'react-ros';

function ROSBar () {
  const { url, changeUrl, isConnected, toggleConnection } = useROS();

  const gridStyle = {
    width: '100vw',
    height: '100%',
    minHeight: '100vh',  
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container spacing={1} justify="flex-end">
          <Grid item style={{ marginTop: '3px' }}>
            { isConnected ? <LinkIcon color="primary" /> : <LinkOffIcon color="primary" /> }
          </Grid>
          <Grid item>
            <Input name="urlInput" defaultValue={ url } onChange={event => changeUrl(event.target.value)} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={toggleConnection}>
              { isConnected ? "Disconnect" : "Connect" }
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default ROSBar;
