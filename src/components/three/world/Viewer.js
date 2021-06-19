import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Controls from '../controls/Controls';
import Sun from '../sun/Sun';
import Plane from '../plane/Plane';
import Cubes from '../cubes/Cubes';

import { useROS }  from 'react-ros';

function Viewer() {
  const { listeners, ros } = useROS();
  const [ stat, setStat ] = useState('searching');
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    if (stat === 'searching') {
      for (var listener in listeners) {
        if(listener) {
          if(listeners[listener].compression === 'cbor-raw') {
            listeners[listener].subscribe(handleCBORMsg);
          } else {
            listeners[listener].subscribe(handleMsg);
          }
          setStat('listening');
        }
      }
 
      const timeout = setTimeout(() => {
        console.log(stat);
        setCount(count + 1);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }
  }, [count]);

  var vertices = [];
  const handleCBORMsg = (msg) => {
    console.log(msg);
  }

  const handleMsg = (msg) => {
    console.log(msg);
  }
  return (
   <Grid container spacing={0} style={{ height: '100%' }}>
     <Canvas shadowMap
             gl={{ alpha: false }}
             camera={{ position: [-1, 1, 2.5], fov: 50 }}
             onCreated={({ gl, camera, scene }) => {
               camera.lookAt(0, 0, 0)
               scene.background = new THREE.Color('white')
               gl.toneMapping = THREE.ACESFilmicToneMapping
               gl.outputEncoding = THREE.sRGBEncoding }}>
       <Controls />
       <gridHelper />
       <axesHelper />
     </Canvas>
   </Grid>
  )
}

export default Viewer;
