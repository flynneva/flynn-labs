import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ROSBar from '../rosBar/ROSBar';
//import Panels from '../panels/Panels';

function Robotics () {

  const gridStyle = {
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
  }

  return (
    <Grid container>
      <ROSBar />
    </Grid>
  );
}

export default Robotics;
