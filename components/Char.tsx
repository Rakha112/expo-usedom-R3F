"use dom";

import { useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Char = () => {
  const model = useFBX(`${process.env.EXPO_BASE_URL}char.fbx`);
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
      }}
      shadows
    >
      <ambientLight intensity={Math.PI} />
      <primitive object={model} position={[0, -50, -300]} />
    </Canvas>
  );
};

export default Char;
