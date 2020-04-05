import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RWViz from 'rwviz';

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
        <RWViz />
      </Grid>
    </Grid>
    );
}

export default Robotics;
