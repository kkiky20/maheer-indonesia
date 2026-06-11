"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

function ChartBars() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      // Cinematic slow rotation
      group.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={group} position={[0, -0.5, 0]}>
        {/* Bar 1 (Short) */}
        <mesh position={[-1.2, 0.4, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={0.1}
            thickness={0.5}
            ior={1.2}
            chromaticAberration={0.04}
            color="#c084fc"
          />
        </mesh>
        
        {/* Bar 2 (Medium) */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.8, 1.6, 0.8]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={0.1}
            thickness={0.5}
            ior={1.2}
            chromaticAberration={0.04}
            color="#a855f7"
          />
        </mesh>

        {/* Bar 3 (Tall) */}
        <mesh position={[1.2, 1.2, 0]}>
          <boxGeometry args={[0.8, 2.4, 0.8]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={0.1}
            thickness={0.5}
            ior={1.2}
            chromaticAberration={0.04}
            color="#7e22ce"
          />
        </mesh>

        {/* Base Platform */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} />
          <meshStandardMaterial color="#f3e8ff" metalness={0.1} roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Diagram3D() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <Canvas frameloop={isInView ? 'always' : 'demand'} camera={{ position: [0, 2, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <ChartBars />
        <Environment preset="city" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={10} blur={2.5} far={4} color="#4c1d95" />
      </Canvas>
    </div>
  );
}
