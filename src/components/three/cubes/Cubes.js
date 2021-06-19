import React, { useMemo } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { useBox } from '@react-three/cannon';
import niceColors from 'nice-color-palettes';

function Cubes ({ number }) {

  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.05, 0.05, 0.05],
    position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5]
  }))

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3)
    const color = new THREE.Color()
    for (let i = 0; i < number; i ++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3)
     return array
  }, [ number])

  useFrame(() => api.setPositionAt(Math.floor(Math.random() * number), Math.random(), Math.random() * 2, Math.random()))
 
  return (
    <instancedMesh receiveShadow castShadow ref={ref} args={[null, null, number]}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colors, 3]} />
      </boxBufferGeometry>
      <meshLambertMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
};

export default Cubes;
