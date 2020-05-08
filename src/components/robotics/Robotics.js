import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Connection } from 'react-ros';

function Robotics () {

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
        <Typography>This is a work in progress. If you'd like to use this on your site, feel free to checkout the 'react-ros' library I'm working on.</Typography> 
        <Connection />
      </Grid>
    </Grid>
    );
}

export default Robotics;
