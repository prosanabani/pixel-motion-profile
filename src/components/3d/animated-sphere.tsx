
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/components/theme-provider";

// Generate random points on a sphere surface
function generatePointsOnSphere(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  
  return points;
}

function AnimatedPointSphere() {
  const { theme } = useTheme();
  const pointsRef = useRef<THREE.Points>(null);
  const pointCount = 3000;
  const radius = 2.5;
  
  // Generate points
  const points = generatePointsOnSphere(pointCount, radius);

  // Animation
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === "light" ? "#2563eb" : "#3b82f6"}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

interface AnimatedSphereProps {
  className?: string;
}

export function AnimatedSphere({ className }: AnimatedSphereProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedPointSphere />
      </Canvas>
    </div>
  );
}
