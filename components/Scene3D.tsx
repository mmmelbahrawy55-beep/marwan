"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type * as THREE from "three";

function FloatingShape({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15 + mouse.y * 0.3;
    meshRef.current.rotation.y = t * 0.1 + mouse.x * 0.5;
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.15;

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t * 0.5) * 2;
      lightRef.current.position.y = Math.cos(t * 0.7) * 2;
    }
  });

  return (
    <group>
      <pointLight ref={lightRef} intensity={2} color="#6366f1" distance={6} />
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={1.2}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#4f46e5"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.15}
            speed={2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#6366f1"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D({
  mouse,
}: {
  mouse: { x: number; y: number };
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={0.3} />
      <FloatingShape mouse={mouse} />
      <Particles />
    </Canvas>
  );
}
