import React from "react";

function Sun () {
  return (
    <mesh>
      <hemisphereLight intensity={0.35} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
    </mesh>
  );
};

export default Sun;
