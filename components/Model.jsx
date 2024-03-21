import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useZoomStore } from '@/store/zoomStore'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/model.glb')
  const { actions, mixer } = useAnimations(animations, group)
  const scroll = useScroll();
  const [duration, setDuration] = useState(0);

  useFrame((state, delta) => {
    actions["Armature.002Action"].paused = false;
    mixer.setTime((scroll.offset > 0.001 ? scroll.offset - 0.001 : 0) * duration);
    actions["Armature.002Action"].paused = true;
  })
  useEffect(() => {
    actions["Armature.002Action"].play();
    const animationClip = actions["Armature.002Action"].getClip();
    setDuration(animationClip.duration);
  }, [])

  const zoom = useZoomStore(state => state.zoom);

  return (
    <group ref={group} {...props} dispose={null} scale={zoom} castShadow>
      <group name="Scene" castShadow>
        <group name="Armature002" castShadow>
          <primitive object={nodes.Bone} />
          <group name="Plane010" castShadow>
            <skinnedMesh name="Plane019" geometry={nodes.Plane019.geometry} material={materials['Box Texture']} skeleton={nodes.Plane019.skeleton} />
            <skinnedMesh name="Plane019_1" geometry={nodes.Plane019_1.geometry} material={materials['Inner Box']} skeleton={nodes.Plane019_1.skeleton} />
          </group>
        </group>
        <mesh name="Indications" geometry={nodes.Indications.geometry} material={materials.Indications} position={[0, 0.042, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.904} castShadow/>
      </group>
    </group>
  )
}

useGLTF.preload('/models/model.glb')
