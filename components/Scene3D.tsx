"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import type * as THREE from "three";

function CodePanel({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.15 + mouse.x * 0.15;
      groupRef.current.rotation.x = Math.cos(t * 0.1) * 0.08 + mouse.y * 0.08;
    }
  });

  const codeLines = [
    { color: "#c792ea", text: "const " },
    { color: "#82aaff", text: "developer" },
    { color: "#89ddff", text: " = {" },
  ];

  return (
    <group ref={groupRef}>
      {/* Main floating panel */}
      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.4}>
        <Html
          transform
          position={[2.4, 0.2, 0]}
          distanceFactor={4}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              width: "320px",
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: "1px solid rgba(85, 88, 230, 0.1)",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.08), 0 0 40px rgba(85,88,230,0.06)",
            }}
          >
            {/* Window dots */}
              <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 14px",
                borderBottom: "1px solid rgba(85,88,230,0.06)",
                background: "rgba(248,249,252,0.5)",
              }}
            >
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: "auto", fontSize: "10px", color: "rgba(0,0,0,0.2)", fontFamily: "monospace" }}>
                developer.ts
              </span>
            </div>

            {/* Code content */}
            <div style={{ padding: "16px 18px", fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: "12px", lineHeight: "1.9" }}>
              <div><span style={{ color: "#7c3aed" }}>const</span> <span style={{ color: "#5558e6" }}>developer</span> <span style={{ color: "#0891b2" }}>= {"{"}</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#db2777" }}>name</span><span style={{ color: "#0891b2" }}>: </span><span style={{ color: "#16a34a" }}>"Marwan Mohamed"</span><span style={{ color: "#0891b2" }}>,</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#db2777" }}>role</span><span style={{ color: "#0891b2" }}>: </span><span style={{ color: "#16a34a" }}>"Full Stack Dev"</span><span style={{ color: "#0891b2" }}>,</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#db2777" }}>stack</span><span style={{ color: "#0891b2" }}>: [</span></div>
              <div style={{ paddingLeft: "28px" }}><span style={{ color: "#16a34a" }}>"React"</span><span style={{ color: "#0891b2" }}>,</span> <span style={{ color: "#16a34a" }}>"Node.js"</span><span style={{ color: "#0891b2" }}>,</span></div>
              <div style={{ paddingLeft: "28px" }}><span style={{ color: "#16a34a" }}>"TypeScript"</span><span style={{ color: "#0891b2" }}>,</span> <span style={{ color: "#16a34a" }}>"Next.js"</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#0891b2" }}>]</span><span style={{ color: "#0891b2" }}>,</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#db2777" }}>passion</span><span style={{ color: "#0891b2" }}>: </span><span style={{ color: "#16a34a" }}>"Building great products"</span></div>
              <div><span style={{ color: "#0891b2" }}>{"}"}</span><span style={{ color: "#0891b2" }}>;</span></div>
            </div>

            {/* Status bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 14px",
                borderTop: "1px solid rgba(85,88,230,0.06)",
                background: "rgba(248,249,252,0.5)",
                fontSize: "9px",
                color: "rgba(0,0,0,0.2)",
                fontFamily: "monospace",
              }}
            >
              <span>TypeScript</span>
              <span>UTF-8</span>
              <span>Ln 8, Col 1</span>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}

function FloatingBrackets() {
  const brackets = [
    { pos: [-0.5, 1.8, -1.5] as [number, number, number], char: "{", color: "#5558e6", size: 28 },
    { pos: [4.8, -0.5, -1] as [number, number, number], char: "}", color: "#db2777", size: 26 },
    { pos: [0.2, -1.8, 0] as [number, number, number], char: "</", color: "#0891b2", size: 18 },
    { pos: [5, 1.8, -0.5] as [number, number, number], char: "/>", color: "#7c3aed", size: 18 },
    { pos: [-1, 0.5, 1.5] as [number, number, number], char: "=>", color: "#16a34a", size: 16 },
    { pos: [4.5, -2, 0.5] as [number, number, number], char: "() =>", color: "#d97706", size: 12 },
    { pos: [2, 2.5, -2] as [number, number, number], char: "[]", color: "#dc2626", size: 20 },
    { pos: [0, 2.2, 1] as [number, number, number], char: "import", color: "#7c3aed", size: 11 },
    { pos: [4, -2.5, -1] as [number, number, number], char: "export", color: "#16a34a", size: 11 },
  ];

  return (
    <>
      {brackets.map((b, i) => (
        <Float key={i} speed={0.6 + i * 0.05} rotationIntensity={0.1} floatIntensity={0.2}>
          <Html
            position={b.pos}
            distanceFactor={5}
            style={{ pointerEvents: "none" }}
          >
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: `${b.size}px`,
                fontWeight: 700,
                color: b.color,
                opacity: 0.5,
                textShadow: `0 0 20px ${b.color}60`,
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {b.char}
            </span>
          </Html>
        </Float>
      ))}
    </>
  );
}

function OrbitDots() {
  const count = 40;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2.8 + Math.random() * 1.5;
      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2;
      pos[i * 3 + 2] = r * Math.sin(theta);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const palette = [
      [0.333, 0.345, 0.902],
      [0.863, 0.153, 0.467],
      [0.031, 0.569, 0.698],
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
      ref.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <Canvas
      camera={{ position: [1.5, 0, 6], fov: 42 }}
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
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 3, 4]} intensity={1} color="#5558e6" distance={12} />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color="#db2777" distance={10} />
      <pointLight position={[0, 3, -4]} intensity={0.3} color="#0891b2" distance={8} />

      <CodePanel mouse={mouse} />
      <FloatingBrackets />
      <OrbitDots />
    </Canvas>
  );
}
