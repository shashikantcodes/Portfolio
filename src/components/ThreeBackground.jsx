'use client';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';

// 1. BACKGROUND STARS (Peeche ke taare)
const StarField = (props) => {
  const ref = useRef();

  const sphere = useMemo(() => {
    const count = 3000; // Taaron ki sankhya
    const radius = 2; // Kitne door honge
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Sphere ke surface par random points
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    // Rotation Animation (Slow)
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.003} // Chhote taare
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// 2. THE BLACK HOLE RING (Beech mein ghumne wala Ring)
const BlackHoleRing = () => {
  const ref = useRef();

  // Ring ke particles generate karna
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Ring radius between 0.6 and 1.0
      const radius = 0.6 + Math.random() * 0.4;

      positions[i * 3] = Math.cos(angle) * radius; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.1; // Y (Flat disk, thoda variation)
      positions[i * 3 + 2] = Math.sin(angle) * radius; // Z
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2; // Ring tezi se ghumega
    }
  });

  return (
    <group rotation={[0.5, 0, 0]}>
      {' '}
      {/* Thoda Tilted Ring */}
      <Points ref={ref} positions={particles} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#a855f7" // Purple Color for Black Hole Ring
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

// 3. WIREFRAME SPHERE (Jo video me lines dikh rahi hain)
const RotatingGlobe = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05; // Slow rotation
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.4, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[1, 32, 32]} /> {/* Sphere Geometry */}
      <meshBasicMaterial
        color="#4c1d95" // Deep Purple Lines
        wireframe={true} // Sirf lines dikhengi
        transparent={true}
        opacity={0.15} // Bahut halka dikhega
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        {' '}
        {/* Camera thoda paas laya */}
        <Suspense fallback={null}>
          {/* A. Stars Background */}
          <StarField />

          {/* B. Central Black Hole Ring */}
          <BlackHoleRing />

          {/* C. The Wireframe Globe */}
          <RotatingGlobe />
        </Suspense>
        <Preload all />
      </Canvas>

      {/* CSS Overlay for that "Glow" effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/80 z-[-1]" />
    </div>
  );
};

export default ThreeBackground;
