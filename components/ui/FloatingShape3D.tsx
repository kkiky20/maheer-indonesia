"use client";

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Shape() {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={mesh}
        onPointerOver={(e) => { e.stopPropagation(); hover(true); }}
        onPointerOut={() => hover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <icosahedronGeometry args={[1.2, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.1}
          thickness={0.5}
          ior={1.2}
          chromaticAberration={0.04}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={hovered ? "#9333ea" : "#c084fc"}
        />
      </mesh>
      {/* Wireframe overlay for a techy look */}
      <mesh scale={hovered ? 1.201 : 1.201}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

export default function FloatingShape3D() {
  return (
    <div className="w-full h-full relative cursor-pointer">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Shape />
        <Environment preset="city" />
        <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={10} blur={2.5} far={3} color="#4c1d95" />
      </Canvas>
    </div>
  );
}
