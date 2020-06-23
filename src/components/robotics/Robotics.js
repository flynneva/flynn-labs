import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ROSBar from '../rosBar/ROSBar';
import Viewer from '../three/world/Viewer';
import World from '../three/world/World';

function Robotics () {

  const gridStyle = {
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  }

  const itemStyle = {
    width: '100vw',
    height: '90vh',
    margin: 0,
    padding: 0,
  }

  return (
    <Grid container style={gridStyle}>
      <ROSBar />
      <Grid item style={itemStyle}>
        <Viewer />
      </Grid>
    </Grid>
  );
}

export default Robotics;
