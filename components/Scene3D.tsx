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
              background: "rgba(10, 10, 30, 0.85)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: "1px solid rgba(99, 102, 241, 0.15)",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.1)",
            }}
          >
            {/* Window dots */}
              <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 14px",
                borderBottom: "1px solid rgba(99,102,241,0.08)",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: "auto", fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
                developer.ts
              </span>
            </div>

            {/* Code content */}
            <div style={{ padding: "16px 18px", fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: "12px", lineHeight: "1.9" }}>
              <div><span style={{ color: "#c792ea" }}>const</span> <span style={{ color: "#82aaff" }}>developer</span> <span style={{ color: "#89ddff" }}>= {"{"}</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#f07178" }}>name</span><span style={{ color: "#89ddff" }}>: </span><span style={{ color: "#c3e88d" }}>"Marwan Mohamed"</span><span style={{ color: "#89ddff" }}>,</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#f07178" }}>role</span><span style={{ color: "#89ddff" }}>: </span><span style={{ color: "#c3e88d" }}>"Full Stack Dev"</span><span style={{ color: "#89ddff" }}>,</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#f07178" }}>stack</span><span style={{ color: "#89ddff" }}>: [</span></div>
              <div style={{ paddingLeft: "28px" }}><span style={{ color: "#c3e88d" }}>"React"</span><span style={{ color: "#89ddff" }}>,</span> <span style={{ color: "#c3e88d" }}>"Node.js"</span><span style={{ color: "#89ddff" }}>,</span></div>
              <div style={{ paddingLeft: "28px" }}><span style={{ color: "#c3e88d" }}>"TypeScript"</span><span style={{ color: "#89ddff" }}>,</span> <span style={{ color: "#c3e88d" }}>"Next.js"</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#89ddff" }}>]</span><span style={{ color: "#89ddff" }}>,</span></div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#f07178" }}>passion</span><span style={{ color: "#89ddff" }}>: </span><span style={{ color: "#c3e88d" }}>"Building great products"</span></div>
              <div><span style={{ color: "#89ddff" }}>{"}"}</span><span style={{ color: "#89ddff" }}>;</span></div>
            </div>

            {/* Status bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 14px",
                borderTop: "1px solid rgba(99,102,241,0.08)",
                background: "rgba(99,102,241,0.03)",
                fontSize: "9px",
                color: "rgba(255,255,255,0.25)",
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
    { pos: [-0.5, 1.8, -1.5] as [number, number, number], char: "{", color: "#6366f1", size: 28 },
    { pos: [4.8, -0.5, -1] as [number, number, number], char: "}", color: "#ec4899", size: 26 },
    { pos: [0.2, -1.8, 0] as [number, number, number], char: "</", color: "#06b6d4", size: 18 },
    { pos: [5, 1.8, -0.5] as [number, number, number], char: "/>", color: "#8b5cf6", size: 18 },
    { pos: [-1, 0.5, 1.5] as [number, number, number], char: "=>", color: "#22c55e", size: 16 },
    { pos: [4.5, -2, 0.5] as [number, number, number], char: "() =>", color: "#f59e0b", size: 12 },
    { pos: [2, 2.5, -2] as [number, number, number], char: "[]", color: "#ef4444", size: 20 },
    { pos: [0, 2.2, 1] as [number, number, number], char: "import", color: "#c792ea", size: 11 },
    { pos: [4, -2.5, -1] as [number, number, number], char: "export", color: "#c3e88d", size: 11 },
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
      [0.388, 0.4, 0.945],
      [0.929, 0.282, 0.6],
      [0.024, 0.714, 0.831],
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
      <pointLight position={[4, 3, 4]} intensity={1.2} color="#6366f1" distance={12} />
      <pointLight position={[-4, -2, 3]} intensity={0.6} color="#ec4899" distance={10} />
      <pointLight position={[0, 3, -4]} intensity={0.4} color="#06b6d4" distance={8} />

      <CodePanel mouse={mouse} />
      <FloatingBrackets />
      <OrbitDots />
    </Canvas>
  );
}
