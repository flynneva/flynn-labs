import React, { useRef, useState } from 'react'
import UseCannon from '../provider/Provider'

function Box({ position }) {
  const [hovered, set] = useState(false)
  // Register box as a physics body with mass
  const ref = UseCannon({ mass: 100000 }, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
    body.position.set(...position)
  })
  return (
    <mesh ref={ref} castShadow receiveShadow onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color={hovered ? 'lightpink' : 'white'} />
    </mesh>
  )
}

export default Box;
