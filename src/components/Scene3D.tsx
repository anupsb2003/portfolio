import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import type { Mesh } from "three";

function CyberCore() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta: number) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.45;
  });

  return (
    <mesh ref={meshRef} scale={1.45}>
      <icosahedronGeometry args={[1, 2]} />

      <MeshDistortMaterial
        color="#00e5ff"
        emissive="#003b4d"
        emissiveIntensity={2}
        wireframe
        distort={0.25}
        speed={2}
      />
    </mesh>
  );
}

type FloatingCubeProps = {
  position: [number, number, number];
  color: string;
};

function FloatingCube({
  position,
  color,
}: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta: number) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 0.7;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.35, 0.35, 0.35]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />

        <pointLight
          position={[3, 3, 4]}
          intensity={8}
          color="#00e5ff"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={5}
          color="#9b5cff"
        />

        <Stars
          radius={50}
          depth={30}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={1}
        />

        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <CyberCore />
        </Float>

        <FloatingCube position={[2, 1, 0]} color="#9b5cff" />
        <FloatingCube position={[-2, -1, 0]} color="#00e5ff" />
        <FloatingCube position={[1.8, -1.5, 0]} color="#ff2bd6" />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}