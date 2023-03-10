import Loader from '../Loader'

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const RimModel = () => {
  const rim = useGLTF('3D/rim/scene.gltf')

  return (
    <mesh>
      <ambientLight color={0x404040} intensity={5} />
      <directionalLight
        color={0xc4c4c4}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        position={[0, 1, 0]}
      />
      <pointLight intensity={1} position={[0, 300, 500]} />
      <primitive object={rim.scene} scale={8} position-y={0} position-x={0} />
    </mesh>
  )
}

export default function Rim() {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={0}
        />
        <RimModel />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
