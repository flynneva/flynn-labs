import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Controls from '../controls/Controls';
import Sun from '../sun/Sun';
import RandomCubes from '../backgrounds/RandomCubes';
import Lights from '../lights/Lights';

function Background() {

  const itemStyle = {
    width: '100vw',
    height: '100vh',
    minHeight: '500px',
    padding: 0,
    margin: 0
  }

  return (
   <Grid container spacing={0} style={itemStyle}>
     <Canvas shadowMap camera={{ position: [0, 0, 100], fov: 100 }}>
      <Controls />
      <Lights />
      <RandomCubes />
    </Canvas>
   </Grid>
  )
}

export default Background;
