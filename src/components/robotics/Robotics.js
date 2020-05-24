import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { ROS, useROS } from 'react-ros';

function Robotics () {
  const { url, changeUrl, isConnected, toggleConnection } = useROS();

  const gridStyle = {
    width: '100vw',
    height: '100%',
    minHeight: '100vh',  
  }
 
  const itemStyle = {
    height: '100%',
    minHeight: '100vh',
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    textAlign: 'center',
  }

  
  return (
    <Grid container justify="center" spacing={0} style={gridStyle}>
      <Grid item xs={12} style={itemStyle}>
        <Grid item>
          <Typography>If you'd like to integrate ROS on your site, feel free to checkout the 'react-ros' library I'm working on.</Typography>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Input name="urlInput" defaultValue={ url } onChange={event => changeUrl(event.target.value)} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={toggleConnection}>
              { isConnected ? "Disconnect" : "Connect" }
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Robotics;
