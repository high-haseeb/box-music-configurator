"use client";
import { Stereo } from "@/public/Steroe";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import * as THREE from 'three'

const Experience = () => {
  const [color, setColor] = useState('#FED86B');
  return (
    <div className="w-screen h-screen">
      <Suspense
        fallback={
          <div className="w-screen h-screen bg-black flex items-center justify-center text-white text-9xl">
            Loading...
          </div>
        }
      >
        <UI callback={setColor}/>
        <Canvas className="w-full h-full">
          <PresentationControls >
            <Stage preset={'portrait'} environment={'city'}>
              <Stereo color={color} scale={2} position={[0, -2, 0]} rotation={[0, -Math.PI/3, 0]}/>
            </Stage>
          </PresentationControls >
          {/* <OrbitControls /> */}
          <CameraRig />
          <BackGround color={color}/>
        </Canvas>
      </Suspense>
    </div>
  );
};

const BackGround = ({ color }) => {
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Color color="#444" alpha={1} mode="normal" />
        <Depth
          colorA={color}
          colorB="black"
          alpha={0.5}
          mode="normal"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
};

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 6 + Math.cos(t / 5) / 2),
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default Experience;

const UI = ({callback}) => {
  const colors = ["#FF7F00", "#F7F7F7", "#B9DBC4", "#FED86B", "violet", "lightpink", "cyan"];
  return (
    <div className="h-screen w-1/12 items-center jsutify-around   flex flex-col absolute top-0 left-0 z-10">
      {colors.map((value, index) => {
        return(
          <button
            key={index}
            className={'bg-purple-100 w-16 h-16 m-4 rounded-[4rem] cursor-pointer'}
            style={{
              background: `linear-gradient(to bottom, ${value}, grey)`,
            }}
            onClick={() => callback(value)}
            title={value}
          ></button>
        )
      })}
    </div>
  );
};
