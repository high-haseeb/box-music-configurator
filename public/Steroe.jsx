import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'

export function Stereo({color="#FED86B", ...props }) {
  const { nodes, materials } = useGLTF('/steroe.gltf')
  applyProps(materials.Plastic, {color: color})
  applyProps(materials['01 - Default'], {color: 'white'})
  return (
    <group {...props} dispose={null}>
      <group position={[-0.042, 0.938, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.059, 0.059, 0.055]}>
        <group position={[-4.304, 0.595, 2.627]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh006.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh006_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-4.304, 0.67, 2.9]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh007.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh007_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-4.304, 0.742, 3.157]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh008.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh008_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-4.304, 0.808, 3.422]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh009.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh009_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[-4.304, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh010.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh010_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-5.082, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh011.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh011_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-5.813, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh012.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh012_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-6.544, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh013.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh013_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-7.276, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh014.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh014_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-3.864, 0.276, 2.135]} scale={0.527}>
          <mesh geometry={nodes.Mesh015.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh015_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-3.864, 0.276, 2.492]} scale={0.527}>
          <mesh geometry={nodes.Mesh016.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh016_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[-3.864, 0.276, 2.849]} scale={0.527}>
          <mesh geometry={nodes.Mesh017.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh017_1.geometry} material={materials['08 - Default']} />
        </group>
        <group position={[-3.864, 0.276, 3.206]} scale={0.527}>
          <mesh geometry={nodes.Mesh018.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh018_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-3.836, 0.276, 4.022]} scale={[0.624, 0.527, 0.927]}>
          <mesh geometry={nodes.Mesh019.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh019_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[-3.864, 0.276, 3.577]} scale={0.527}>
          <mesh geometry={nodes.Mesh020.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh020_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-8.165, 0.306, -2.921]}>
          <mesh geometry={nodes.Mesh021.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh021_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[-5.082, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh026.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh026_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-5.813, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh027.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh027_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-6.544, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh028.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh028_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-7.276, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh029.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh029_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-0.082, -0.899, 0.028]}>
          <mesh geometry={nodes.Mesh037.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh037_1.geometry} material={materials['08 - Default']} />
          <mesh geometry={nodes.Mesh037_2.geometry} material={materials['14 - Default']} />
          <mesh geometry={nodes.Mesh037_3.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-0.868, 0.39, -2.58]}>
          <mesh geometry={nodes.Mesh050.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh050_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[-0.083, 0.39, -2.191]}>
          <mesh geometry={nodes.Mesh051.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh051_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[0.702, 0.39, -2.558]}>
          <mesh geometry={nodes.Mesh052.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh052_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[1.487, 0.39, -2.906]}>
          <mesh geometry={nodes.Mesh053.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh053_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[-0.075, 0.39, -3.836]} rotation={[0, -1.571, 0]}>
          <mesh geometry={nodes.Mesh054.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh054_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[-0.865, 0.428, -0.857]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh055.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh055_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-0.077, 0.428, -0.857]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh056.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh056_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[0.711, 0.428, -0.857]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh057.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh057_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[1.5, 0.428, -0.857]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh058.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh058_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-0.865, 0.428, -0.23]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh059.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh059_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[-0.077, 0.428, -0.23]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh060.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh060_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[0.711, 0.428, -0.23]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh061.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh061_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[1.5, 0.428, -0.23]} scale={[0.978, 0.527, 0.978]}>
          <mesh geometry={nodes.Mesh062.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh062_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[-2.846, 0.417, -1.317]} scale={0.527}>
          <mesh geometry={nodes.Mesh067.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh067_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-2.475, 0.417, -1.317]} scale={0.527}>
          <mesh geometry={nodes.Mesh069.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh069_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-2.104, 0.417, -1.317]} scale={0.527}>
          <mesh geometry={nodes.Mesh070.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh070_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[7.881, 0.595, 2.627]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh082.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh082_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[7.881, 0.67, 2.9]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh083.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh083_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[7.881, 0.742, 3.157]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh084.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh084_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[7.881, 0.808, 3.422]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh085.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh085_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[7.881, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={0.527}>
          <mesh geometry={nodes.Mesh086.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh086_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[7.103, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh087.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh087_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[6.372, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh088.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh088_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[5.64, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh089.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh089_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[4.909, 0.875, 3.687]} rotation={[-0.262, 0, 0]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh090.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh090_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[8.321, 0.276, 2.135]} scale={0.527}>
          <mesh geometry={nodes.Mesh091.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh091_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[8.321, 0.276, 2.492]} scale={0.527}>
          <mesh geometry={nodes.Mesh092.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh092_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[8.321, 0.276, 2.849]} scale={0.527}>
          <mesh geometry={nodes.Mesh093.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh093_1.geometry} material={materials['08 - Default']} />
        </group>
        <group position={[8.321, 0.276, 3.206]} scale={0.527}>
          <mesh geometry={nodes.Mesh094.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh094_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[8.348, 0.276, 4.022]} scale={[0.624, 0.527, 0.927]}>
          <mesh geometry={nodes.Mesh095.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh095_1.geometry} material={materials['07 - Default']} />
        </group>
        <group position={[8.321, 0.276, 3.577]} scale={0.527}>
          <mesh geometry={nodes.Mesh096.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh096_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[8.135, 0.306, -2.921]}>
          <mesh geometry={nodes.Mesh097.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh097_1.geometry} material={materials['01 - Default']} />
        </group>
        <group position={[7.103, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh098.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh098_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[6.372, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh099.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh099_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[5.64, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh100.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh100_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[4.909, 0.251, 1.519]} scale={[1.165, 0.527, 0.527]}>
          <mesh geometry={nodes.Mesh101.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh101_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-6.092, 0.16, -1.218]}>
          <mesh geometry={nodes.Mesh080.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh080_1.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh080_2.geometry} material={materials['08 - Default']} />
          <mesh geometry={nodes.Mesh080_3.geometry} material={materials['07 - Default']} />
        </group>
        <mesh geometry={nodes.Cylinder122.geometry} material={materials['01 - Default']} position={[-7.95, -0.956, -3.517]} />
        <mesh geometry={nodes.Cylinder123.geometry} material={materials['01 - Default']} position={[-4.204, -0.956, -3.517]} />
        <mesh geometry={nodes.Cylinder124.geometry} material={materials['01 - Default']} position={[-7.95, -0.956, 3.626]} />
        <mesh geometry={nodes.Cylinder125.geometry} material={materials['01 - Default']} position={[-4.204, -0.956, 3.626]} />
        <group position={[-3.94, 0.259, -3.718]} scale={[0.957, 0.687, 0.957]}>
          <mesh geometry={nodes.Mesh004.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh004_1.geometry} material={materials['03 - Default']} />
        </group>
        <group position={[-3.94, 0.259, -3.139]} scale={[0.957, 0.687, 0.957]}>
          <mesh geometry={nodes.Mesh005.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh005_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[-8.311, 0.207, 2.109]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
          <mesh geometry={nodes.Mesh022.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh022_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-8.311, 0.207, 2.434]} rotation={[-Math.PI, 1.204, -Math.PI]}>
          <mesh geometry={nodes.Mesh023.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh023_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-3.9, 0.207, -2.517]}>
          <mesh geometry={nodes.Mesh024.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh024_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-3.9, 0.207, -2.192]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh025.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh025_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-7.834, 0.506, 2.552]} rotation={[-0.262, 0, 0]}>
          <mesh geometry={nodes.Mesh030.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh030_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-7.834, 0.59, 2.866]} rotation={[-0.262, -1.117, 0]}>
          <mesh geometry={nodes.Mesh031.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh031_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-3.9, 0.117, -1.703]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh032.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh032_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-3.9, 0.117, -1.265]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh033.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh033_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-8.317, 0.117, 2.956]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh034.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh034_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-8.317, 0.117, 3.394]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh035.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh035_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-0.865, 0.322, 0.663]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh038.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh038_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.865, 0.322, 1.34]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh039.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh039_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.865, 0.322, 2.017]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh040.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh040_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.08, 0.322, 0.663]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh041.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh041_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.08, 0.322, 1.34]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh042.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh042_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.08, 0.322, 2.017]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh043.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh043_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[0.706, 0.322, 0.663]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh044.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh044_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[0.706, 0.322, 1.34]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh045.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh045_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[0.706, 0.322, 2.017]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh046.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh046_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[1.492, 0.322, 0.663]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh047.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh047_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[1.492, 0.322, 1.34]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh048.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh048_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[1.492, 0.322, 2.017]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh049.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh049_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[2.529, 0.322, -2.744]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh063.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh063_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[2.529, 0.322, -2.067]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh064.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh064_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[2.283, 0.251, 2.055]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh065.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh065_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[2.711, 0.251, 2.055]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh066.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh066_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-2.478, 0.255, -0.969]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh068.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh068_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[-2.495, 0.322, -2.902]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh071.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh071_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-2.495, 0.322, -2.186]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh072.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh072_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-2.495, 0.322, -1.566]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh073.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh073_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-1.633, 0.322, 3.079]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh074.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh074_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-1.633, 0.322, 0.116]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh075.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh075_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.865, 0.322, 3.081]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh076.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh076_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[-0.08, 0.322, 3.081]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh077.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh077_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[0.706, 0.322, 3.081]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh078.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh078_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[1.492, 0.322, 3.081]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh079.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh079_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[2.225, 0.322, 1.34]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[2.764, 0.322, 1.34]} rotation={[0, -1.117, 0]} scale={[1.319, 1, 1.319]}>
          <mesh geometry={nodes.Mesh036.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh036_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[6.092, 0.16, -1.218]} rotation={[Math.PI, 0, 0]} scale={-1}>
          <mesh geometry={nodes.Mesh102.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh102_1.geometry} material={materials['09 - Default']} />
          <mesh geometry={nodes.Mesh102_2.geometry} material={materials['08 - Default']} />
          <mesh geometry={nodes.Mesh102_3.geometry} material={materials['07 - Default']} />
        </group>
        <mesh geometry={nodes.Cylinder227.geometry} material={materials['01 - Default']} position={[4.235, -0.956, -3.517]} />
        <mesh geometry={nodes.Cylinder228.geometry} material={materials['01 - Default']} position={[7.981, -0.956, -3.517]} />
        <mesh geometry={nodes.Cylinder229.geometry} material={materials['01 - Default']} position={[4.235, -0.956, 3.626]} />
        <mesh geometry={nodes.Cylinder230.geometry} material={materials['01 - Default']} position={[7.981, -0.956, 3.626]} />
        <group position={[3.927, 0.259, -3.718]} scale={[0.957, 0.687, 0.957]}>
          <mesh geometry={nodes.Mesh107.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh107_1.geometry} material={materials['03 - Default']} />
        </group>
        <group position={[3.927, 0.259, -3.139]} scale={[0.957, 0.687, 0.957]}>
          <mesh geometry={nodes.Mesh108.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh108_1.geometry} material={materials['02 - Default']} />
        </group>
        <group position={[3.874, 0.207, 2.109]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
          <mesh geometry={nodes.Mesh109.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh109_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[3.874, 0.207, 2.434]} rotation={[-Math.PI, 1.204, -Math.PI]}>
          <mesh geometry={nodes.Mesh110.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh110_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[3.966, 0.207, -2.517]}>
          <mesh geometry={nodes.Mesh111.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh111_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[3.966, 0.207, -2.192]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh112.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh112_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[4.351, 0.506, 2.552]} rotation={[-0.262, 0, 0]}>
          <mesh geometry={nodes.Mesh113.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh113_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[4.351, 0.59, 2.866]} rotation={[-0.262, -1.117, 0]}>
          <mesh geometry={nodes.Mesh114.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh114_1.geometry} material={materials['09 - Default']} />
        </group>
        <group position={[3.966, 0.117, -1.703]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh115.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh115_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[3.966, 0.117, -1.265]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh116.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh116_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[3.867, 0.117, 2.956]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh117.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh117_1.geometry} material={materials['14 - Default']} />
        </group>
        <group position={[3.867, 0.117, 3.394]} rotation={[0, -1.117, 0]}>
          <mesh geometry={nodes.Mesh118.geometry} material={materials['01 - Default']} />
          <mesh geometry={nodes.Mesh118_1.geometry} material={materials['14 - Default']} />
        </group>
      </group>
      <mesh geometry={nodes['meter-front'].geometry} material={materials['01 - Default']} position={[0.363, 1.24, 0.066]} rotation={[0, 0, -Math.PI / 2]} scale={[0.169, 0.149, 0.149]} />
      <mesh geometry={nodes.body.geometry} material={materials.Plastic} position={[0, 0.729, 0]} scale={[0.31, 0.65, 0.783]} />
      <mesh geometry={nodes['speaker-right'].geometry} material={materials['Scratched Silver Metal']} position={[-0.005, 1.133, -0.797]} rotation={[Math.PI / 2, 0, 0]} scale={[0.155, 0.056, 0.155]} />
      <mesh geometry={nodes['top-banner'].geometry} material={materials.Plastic} position={[0.017, 2.078, 0.012]} rotation={[0, 1.571, 0]} scale={[0.749, 10.653, 0.023]} />
      <mesh geometry={nodes.handles.geometry} material={nodes.handles.material} position={[-0.319, 0.892, 0.409]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.008, -0.033, -0.06]} />
      <mesh geometry={nodes['grill-right-b'].geometry} material={materials['Scratched Silver Metal']} position={[0.317, 0.892, -0.49]} rotation={[0, 0, -Math.PI / 2]} scale={[0.068, 0.036, 0.217]} />
      <mesh geometry={nodes['speaker-left'].geometry} material={materials['Scratched Silver Metal']} position={[-0.005, 1.133, 0.792]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.155, 0.056, 0.155]} />
      <mesh geometry={nodes['grill-right'].geometry} material={materials['Scratched Silver Metal']} position={[0.293, 1.084, -0.586]} rotation={[0, 0, -1.344]} scale={[0.005, 0.01, 0.11]} />
      <mesh geometry={nodes['big-speaker-grill-right'].geometry} material={materials['Glossy Plastic']} position={[0.24, 0.503, -0.48]} rotation={[0, 0, -Math.PI / 2]} scale={[0.277, 0.091, 0.277]} />
      <mesh geometry={nodes['big-speaker-grill-left'].geometry} material={materials['Glossy Plastic']} position={[0.33, 0.479, 0.468]} rotation={[0, 0, Math.PI / 2]} scale={[0.017, 0.021, 0.256]} />
      <mesh geometry={nodes['small-speker-grill'].geometry} material={materials['Scratched Silver Metal']} position={[0.253, 1.252, -0.586]} rotation={[0, 0, -1.361]} scale={[0.009, 0.01, 0.081]} />
      <mesh geometry={nodes['grill-left'].geometry} material={materials['Scratched Silver Metal']} position={[0.293, 1.087, 0.598]} rotation={[0, 0, -1.349]} scale={[0.056, 0.023, 0.12]} />
      <mesh geometry={nodes['small-speaker-grill'].geometry} material={materials['Scratched Silver Metal']} position={[0.253, 1.252, 0.605]} rotation={[0, 0, -1.361]} scale={[0.009, 0.01, 0.081]} />
      <mesh geometry={nodes['grill-left-b'].geometry} material={materials['Scratched Silver Metal']} position={[0.308, 0.891, 0.503]} rotation={[0, 0, Math.PI / 2]} scale={[0.017, 0.021, 0.211]} />
      <mesh geometry={nodes['name-plate'].geometry} material={materials.Polystyrene} position={[0.301, 0.904, -0.007]} scale={[-0.017, -0.059, -0.17]} />
      <mesh geometry={nodes['front-knobs'].geometry} material={nodes['front-knobs'].material} position={[0.311, 0.63, 0.104]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.009, -0.021, -0.033]} />
      <mesh geometry={nodes['label-bottom'].geometry} material={nodes['label-bottom'].material} position={[0.311, 0.296, -0.007]} rotation={[-Math.PI, 0, 0]} scale={[-0.009, -0.021, -0.148]} />
      <mesh geometry={nodes['butttons-bottom'].geometry} material={nodes['butttons-bottom'].material} position={[0.311, 0.221, 0.111]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.009, -0.021, -0.033]} />
      <mesh geometry={nodes['back-plate'].geometry} material={nodes['back-plate'].material} position={[0.098, 1.214, -0.001]} rotation={[0, 0, 1.139]} scale={[0.149, 1, 0.734]} />
      <mesh geometry={nodes['speaker-balls'].geometry} material={nodes['speaker-balls'].material} position={[0.216, 1.252, -0.589]} scale={0.021} />
      <mesh geometry={nodes['cassette-name'].geometry} material={materials.FitaLateralBaixo} position={[0.311, 0.381, -0.005]} rotation={[Math.PI, 0, Math.PI]} scale={[0.002, 0.003, 0.003]} />
      <mesh geometry={nodes.casette.geometry} material={nodes.casette.material} position={[0.311, 0.381, -0.005]} rotation={[Math.PI, 0, Math.PI]} scale={[0.002, 0.003, 0.003]} />
      <mesh geometry={nodes.Object004.geometry} material={materials.Conector} position={[0.311, 0.381, -0.005]} rotation={[Math.PI, 0, Math.PI]} scale={[0.002, 0.003, 0.003]} />
      <mesh geometry={nodes.wheels.geometry} material={materials.initialShadingGroup} position={[-0.278, 0.029, 0.746]} rotation={[0, 1.571, 0]} scale={0.881} />
      <mesh geometry={nodes['back-supports'].geometry} material={nodes['back-supports'].material} position={[0.015, 1.133, 0.712]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-0.013, -0.004, -0.013]} />
      <mesh geometry={nodes.bars.geometry} material={materials.Plastic} position={[0.017, 1.665, 0.757]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.421, 1.191, 0.02]} />
    </group>
  )
}

useGLTF.preload('/steroe.gltf')
