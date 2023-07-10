/*eslint-disable*/
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cubes from './Cubes';

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cubes />
    </Canvas>
  );
};

export default Scene;