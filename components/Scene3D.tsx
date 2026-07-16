"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type * as THREE from "three";

function CodeTorusKnot({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + mouse.y * 0.2;
      meshRef.current.rotation.y = t * 0.1 + mouse.x * 0.3;
      meshRef.current.position.y = Math.sin(t * 0.3) * 0.1;
    }

    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.z = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.y = t * 0.25;
      ring2.current.rotation.x = t * 0.15;
    }
    if (ring3.current) {
      ring3.current.rotation.z = t * 0.2;
      ring3.current.rotation.y = -t * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.15} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#6366f1" distance={10} />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#ec4899" distance={8} />
      <pointLight position={[0, 2, -3]} intensity={0.5} color="#06b6d4" distance={6} />

      {/* Main torus knot */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={meshRef} scale={0.9}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#4f46e5"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.9}
            distort={0.1}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Orbital rings */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.008, 16, 100]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={2} transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.006, 16, 100]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2} transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3} rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.005, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function CodeParticles() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const palette = [
      [0.388, 0.4, 0.945], // indigo
      [0.929, 0.282, 0.6],  // pink
      [0.024, 0.714, 0.831], // cyan
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[i % 3];
      cols[i * 3] = c[0];
      cols[i * 3 + 1] = c[1];
      cols[i * 3 + 2] = c[2];
    }
    return cols;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.03;
      ref.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function FloatingCodeSymbol({ position, char, color }: { position: [number, number, number]; char: string; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.3;
      ref.current.rotation.z = Math.sin(t * 0.3 + position[2]) * 0.2;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.15, 0.15, 0.02]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D({ mouse }: { mouse: { x: number; y: number } }) {
  const symbols = [
    { pos: [-2.5, 1, -1] as [number, number, number], char: "{", color: "#6366f1" },
    { pos: [2.8, -0.5, -0.5] as [number, number, number], char: "}", color: "#ec4899" },
    { pos: [-1.8, -1.5, 0.5] as [number, number, number], char: "</", color: "#06b6d4" },
    { pos: [2, 1.5, 0] as [number, number, number], char: "/>", color: "#8b5cf6" },
    { pos: [-2.8, 0, 1] as [number, number, number], char: "=>", color: "#22c55e" },
    { pos: [1.5, -1.8, -1] as [number, number, number], char: "( )", color: "#f59e0b" },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <CodeTorusKnot mouse={mouse} />
      <CodeParticles />
      {symbols.map((s, i) => (
        <FloatingCodeSymbol key={i} position={s.pos} char={s.char} color={s.color} />
      ))}
    </Canvas>
  );
}
