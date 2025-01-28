import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/model.glb');

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[4, 4, 4]} position={[0, -2, 0]} />;
};

const ModelViewer = () => {
  return (
    <Canvas
      camera={{ position: [-10, 45, 20], fov: 60, near: 0.1, far: 500 }}
      style={{ height: '100vh', width: '100vw', background: '#000' }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 20, 10]} intensity={2} />
      <Model />
      <OrbitControls enableZoom={true} minDistance={10} maxDistance={30} enablePan={true} />
    </Canvas>
  );
};

export default ModelViewer;
