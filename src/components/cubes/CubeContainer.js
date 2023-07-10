/*eslint-disable*/
import { Canvas } from "@react-three/fiber";
import Cube from "./Cubes";

const CubeContainer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default CubeContainer;