
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Simplified AnimatedSphere component with proper prop typing
const AnimatedSphere = ({ 
  position, 
  size, 
  speed, 
  distort, 
  color1, 
  color2 
}) => {
  const sphereRef = useRef(null);
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * 0.2;
    sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });
  
  return (
    <Sphere ref={sphereRef} args={[size, 32, 32]} position={position}>
      <MeshDistortMaterial 
        distort={distort} 
        speed={0.4} 
        roughness={0.2}
        metalness={0.8}
        color={color1}
      />
    </Sphere>
  );
};

const PatternGrid = () => {
  const gridRef = useRef(null);
  
  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <mesh ref={gridRef} rotation={[Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial 
        color="#00F5FF" 
        wireframe={true} 
        opacity={0.1} 
        transparent={true} 
      />
    </mesh>
  );
};

const PatternBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0F1122]">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <PatternGrid />
        <AnimatedSphere 
          position={[-3, 0, -2]} 
          size={1.5} 
          speed={0.5} 
          distort={0.4}
          color1="#00F5FF" 
          color2="#0F1122" 
        />
        <AnimatedSphere 
          position={[3, 0, -4]} 
          size={2} 
          speed={0.3} 
          distort={0.6}
          color1="#B026FF" 
          color2="#0F1122" 
        />
        <AnimatedSphere 
          position={[0, -2, -6]} 
          size={3} 
          speed={0.2} 
          distort={0.2}
          color1="#FAFF00" 
          color2="#0F1122" 
        />
      </Canvas>
    </div>
  );
};

export default PatternBackground;
