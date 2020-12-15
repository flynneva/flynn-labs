import React from 'react';
import { Link } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import World from './world/World';

function Three () {

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
      margin: 0
    }
 
    return (
    <Grid container justify="center" spacing={0} style={gridStyle}>
      <Grid item xs={12} style={itemStyle}>
        <World>
        </World>
      </Grid>
    </Grid>
    );
}

export default Three;
