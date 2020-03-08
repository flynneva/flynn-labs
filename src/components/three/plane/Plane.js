import React from 'react';
import UseCannon from '../provider/Provider';

function Plane({ position }) {
  // Register plane as a physics body with zero mass
  const ref = UseCannon({ mass: 0 }, body => {
    body.addShape(new CANNON.Plane())
    body.position.set(...position)
  })
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#272727" />
    </mesh>
  )
}

export default Plane;
