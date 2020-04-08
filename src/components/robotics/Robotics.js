import React from 'react';
import Grid from '@material-ui/core/Grid';

function Robotics () {

    const gridStyle = {
      width: '100vw',
      height: '100%',
      minHeight: '100vh',  
    }
   
    const itemStyle = {
      width: '100vw',
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
        UNDER CONSTRUCTION
      </Grid>
    </Grid>
    );
}

export default Robotics;
