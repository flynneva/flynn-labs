import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Controls from '../controls/Controls';
import Cubes from '../cubes/Cubes';
import Lights from '../lights/Lights';
import Environment from '../environment/Environment';

function World() {
  return (
   <Grid container spacing={0} style={{ width: '100%', height: '100%' }}>
     <Canvas>
       <Cubes />
       <Lights />
       <Environment />
       <Controls />
     </Canvas>
   </Grid>
  )
}

export default World;
