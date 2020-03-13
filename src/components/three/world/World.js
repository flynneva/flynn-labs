import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';
import Controls from '../controls/Controls';
import Sun from '../sun/Sun';
import Plane from '../plane/Plane';
import Cubes from '../cubes/Cubes';

function World() {
  return (
   <Grid container spacing={0} style={{ width: '100%', height: '100%' }}>
     <Canvas shadowMap
             gl={{ alpha: false }}
             camera={{ position: [-1, 1, 2.5], fov: 50 }}
             onCreated={({ gl, camera, scene }) => {
               camera.lookAt(0, 0, 0)
               scene.background = new THREE.Color('lightblue')
               gl.toneMapping = THREE.ACESFilmicToneMapping
               gl.outputEncoding = THREE.sRGBEncoding }}>
       <Controls />
       <Sun />
       <Physics>
         <Plane rotation={[-Math.PI / 2, 0, 0]} />
         <Cubes number={200} />
       </Physics>
     </Canvas>
   </Grid>
  )
}

export default World;
