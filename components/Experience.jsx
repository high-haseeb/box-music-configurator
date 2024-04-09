"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import {
  PresentationControls,
  ScrollControls,
} from "@react-three/drei";
import { useZoomStore } from "@/store/zoomStore";

const Experience = () => {
  const zoomIn = useZoomStore((state) => state.zoomIn);
  const zoomOut = useZoomStore((state) => state.zoomOut);
  return (
    <div className="w-full h-full bg-gray-800">
      <Canvas>
        <PresentationControls
          speed={3}
          rotation={[Math.PI / 4, Math.PI / 2 + 1, 0]}
          polar={[-Math.PI, Math.PI]}
        >
          <directionalLight position={[1, 1, 1]} />
          <ScrollControls pages={4}>
            <Model />
          </ScrollControls>
        </PresentationControls>
        <ambientLight/>
      </Canvas>
      <div className="absolute bottom-8 text-white text-xl font-bold left-1/2 -translate-x-1/2 h-12">
        ▼ Scroll to Animate ▼
      </div>
      <div className="absolute bottom-8 right-8 flex gap-4">
        <button
          onClick={() => zoomIn()}
          className="text-white text-2xl font-bold bg-black rounded-full  h-12 w-12 flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => zoomOut()}
          className="text-white  text-2xl font-bold bg-black rounded-full  h-12 w-12 flex items-center justify-center"
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Experience;
