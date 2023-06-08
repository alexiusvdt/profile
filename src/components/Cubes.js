/*eslint-disable*/
import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import * as THREE from 'three';
// import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';

// Define the cube data
const cubeData = [
  { image: '../img/javascript.png', position: [-2, 0, 0] },
  { image: '../img/javascript.svg', position: [0, 0, 0] },
  { image: '../img/docker.svg', position: [2, 0, 0] },
];

const Cubes = () => {
  const groupRef = useRef();
  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: async (next) => {
      while (true) {
        await next({ rotation: [0, 0, 2 * Math.PI] });
      }
    },
    reset: true,
  });

  return (
    <group ref={groupRef}>
      {cubeData.map(({ image, position }, index) => (
        <animated.mesh key={index} position={position} rotation={rotation}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            map={new THREE.TextureLoader().load(image)}
            side={THREE.DoubleSide}
          />
        </animated.mesh>
      ))}
    </group>
  );
};

export default Cubes;