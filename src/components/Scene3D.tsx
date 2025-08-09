import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Floating geometric shapes inspired by da Vinci's precision
const FloatingGeometry = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#ffffff"
          transparent
          opacity={0.1}
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

// Minimal 3D text component
const Hero3DText = () => {
  const textRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={textRef}>
      <Text
        fontSize={1.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        We Create
      </Text>
      <Text
        position={[0, -1.2, 0]}
        fontSize={1.6}
        color="#007AFF"
        anchorX="center"
        anchorY="middle"
      >
        Digital Excellence
      </Text>
    </group>
  );
};

const Scene3D = () => {
  // Generate random positions for floating elements
  const geometries = useMemo(() => 
    Array.from({ length: 8 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.4
    }))
  , []);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      className="absolute inset-0 z-0"
      dpr={[1, 2]}
    >
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
      
      {/* 3D Text */}
      <Hero3DText />
      
      {/* Floating geometries */}
      {geometries.map((geo, index) => (
        <FloatingGeometry 
          key={index}
          position={geo.position}
          scale={geo.scale}
        />
      ))}
      
      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene3D;