import React from 'react';
import { usePlane } from 'use-cannon';

function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshPhongMaterial attach="material" color={props.color} />
    </mesh>
  )
}

export default Plane;
