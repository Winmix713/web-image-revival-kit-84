
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Enhanced and properly typed AnimatedSphere component
interface AnimatedSphereProps {
  position: [number, number, number];
  size: number;
  speed: number;
  distort: number;
  color1: string;
  color2?: string;
  pulseIntensity?: number;
}

const AnimatedSphere = ({ 
  position, 
  size, 
  speed, 
  distort, 
  color1, 
  color2,
  pulseIntensity = 0.2
}: AnimatedSphereProps) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    
    // Animate position with sin wave
    sphereRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * pulseIntensity;
    
    // Animate rotation
    sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    
    // Subtle scale pulsing
    const scalePulse = 1 + Math.sin(state.clock.elapsedTime * (speed * 0.8)) * 0.05;
    sphereRef.current.scale.set(scalePulse, scalePulse, scalePulse);
  });
  
  return (
    <Sphere ref={sphereRef} args={[size, 64, 64]} position={position}>
      <MeshDistortMaterial 
        distort={distort} 
        speed={0.4} 
        roughness={0.2}
        metalness={0.8}
        color={color1}
        envMapIntensity={0.7}
        clearcoat={0.4}
        clearcoatRoughness={0.25}
      />
    </Sphere>
  );
};

const PatternGrid = () => {
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    
    // Add subtle wave effect to grid
    const vertices = (gridRef.current.geometry as THREE.PlaneGeometry).attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < vertices.length; i += 3) {
      // Only affect z coordinate for wave effect
      const x = vertices[i];
      const y = vertices[i + 1];
      vertices[i + 2] = Math.sin(x * 0.3 + time * 0.7) * 0.15 + 
                        Math.sin(y * 0.3 + time * 0.6) * 0.15;
    }
    
    (gridRef.current.geometry as THREE.PlaneGeometry).attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={gridRef} rotation={[Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
      <planeGeometry args={[30, 30, 32, 32]} />
      <meshBasicMaterial 
        color="#00F5FF" 
        wireframe={true} 
        opacity={0.15} 
        transparent={true} 
      />
    </mesh>
  );
};

// Add ambient light particles for additional effect
const AmbientParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;
  
  // Generate random particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesPositions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    particlesPositions[i] = (Math.random() - 0.5) * 25;     // x
    particlesPositions[i + 1] = (Math.random() - 0.5) * 25; // y
    particlesPositions[i + 2] = (Math.random() - 0.5) * 25; // z
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
  
  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" {...particlesGeometry} />
      <pointsMaterial 
        attach="material" 
        size={0.05} 
        color="#B026FF" 
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const PatternBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0F1122]">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10 bg-repeat"></div>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 10, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -10, 2]} intensity={0.3} color="#B026FF" />
        
        <PatternGrid />
        <AmbientParticles />
        
        <AnimatedSphere 
          position={[-3, 0, -2]} 
          size={1.5} 
          speed={0.5} 
          distort={0.4}
          color1="#00F5FF" 
          pulseIntensity={0.3}
        />
        
        <AnimatedSphere 
          position={[3, 0, -4]} 
          size={2} 
          speed={0.3} 
          distort={0.6}
          color1="#B026FF" 
          pulseIntensity={0.25}
        />
        
        <AnimatedSphere 
          position={[0, -2, -6]} 
          size={3} 
          speed={0.2} 
          distort={0.2}
          color1="#FAFF00" 
          pulseIntensity={0.15}
        />
        
        <AnimatedSphere 
          position={[-5, 3, -10]} 
          size={1.2} 
          speed={0.4} 
          distort={0.5}
          color1="#FF4A4A"
          pulseIntensity={0.2}
        />
        
        <AnimatedSphere 
          position={[5, 3, -8]} 
          size={1.8} 
          speed={0.25} 
          distort={0.3}
          color1="#9b87f5"
          pulseIntensity={0.2}
        />
      </Canvas>
    </div>
  );
};

export default PatternBackground;
