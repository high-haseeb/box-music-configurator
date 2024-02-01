"use client"
import { Stereo } from "@/public/Steroe";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Experience = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas className="w-full h-full">
        <Environment preset="city" />
        <Stereo />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Experience;
