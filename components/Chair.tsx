"use dom";

import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelLoader: React.FC<{ modelUrl: string }> = ({ modelUrl }) => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Cleanup on unmount
    return () => {
      scene.clear();
    };
  }, [modelUrl, scene]);

  return null;
};

const Chair = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [1, 1, 1], fov: 40 }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[5, 5, 5]} />
      <ModelLoader modelUrl={`${process.env.EXPO_BASE_URL}Chair.glb`} />
    </Canvas>
  );
};

export default Chair;
