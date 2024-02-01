"use client";
import { Stereo } from "@/public/Steroe";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Experience = () => {
  return (
    <div className="w-screen h-screen">
      <Suspense
        fallback={
          <div className="w-screen h-screen bg-black flex items-center justify-center text-white text-9xl">
            Loading...
          </div>
        }
      >
        <Canvas className="w-full h-full">
          <Environment preset="city" />
          <Stereo />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Experience;
