"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { useRef } from 'react';

function FloatingMesh() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += delta * 0.35;
    meshRef.current.rotation.y += delta * 0.55;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
  });

  return (
    <mesh ref={meshRef} castShadow>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#7dd3fc" metalness={0.35} roughness={0.2} />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -1.1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#0f172a" roughness={1} />
    </mesh>
  );
}

export default function TestScene() {
  return (
    <main className="scene-shell">
      <header className="scene-copy">
        <p className="eyebrow">Test scene</p>
        <h1>React Three Fiber setup</h1>
        <p>A minimal interactive scene to verify the renderer, controls, and build pipeline.</p>
      </header>

      <section className="scene-frame" aria-label="3D preview">
        <Canvas shadows camera={{ position: [0, 1.2, 4.5], fov: 45 }}>
          <color attach="background" args={["#020617"]} />
          <fog attach="fog" args={["#020617", 6, 14]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 5, 4]} intensity={2.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <pointLight position={[-3, 1, -2]} intensity={20} color="#38bdf8" />
          <FloatingMesh />
          <Sphere args={[0.6, 48, 48]} position={[-1.9, -0.35, -1.2]}>
            <meshStandardMaterial color="#f8fafc" roughness={0.15} metalness={0.9} />
          </Sphere>
          <Sphere args={[0.4, 32, 32]} position={[2.1, 0.4, -0.8]}>
            <meshStandardMaterial color="#fb7185" roughness={0.2} metalness={0.75} />
          </Sphere>
          <Ground />
          <Stars radius={50} depth={18} count={3500} factor={4} fade speed={1} />
          <OrbitControls enablePan={false} minDistance={2.5} maxDistance={7} />
        </Canvas>
      </section>
    </main>
  );
}