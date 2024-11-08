// From: https://codesandbox.io/p/sandbox/re-using-gltfs-dix1y?file=%2Fpackage.json%3A10%2C3-10%2C23
// via DRCMDA!
"use dom";

import React from "react";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  CameraControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./shoe";

type Props = {};

const ShoeWrapper = (props: Props) => {
  return (
    <Canvas
      style={{
        height: "100vh",
      }}
      shadows
      camera={{ position: [5, 0, 5], fov: 35 }}
    >
      <ambientLight intensity={Math.PI} />
      <Shoe position={[0, 0, 0.85]} />
      <Shoe position={[0, 0, -0.85]} rotation={[0, 0.5, Math.PI]} scale={-1} />
      <AccumulativeShadows
        position={[0, -0.5, 0]}
        temporal
        frames={100}
        alphaTest={0.75}
        opacity={0.9}
      >
        <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <CameraControls />
      <Environment preset="city" />
    </Canvas>
  );
};

export default ShoeWrapper;
