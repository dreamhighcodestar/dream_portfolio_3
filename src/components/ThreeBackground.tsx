
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { createAnimationState, setupEventListeners, updateAnimation } from './three/AnimationSystem';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera with improved depth perception for 3D effect
    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 50;
    
    // Renderer with better quality settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000510, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Create star particles
    const createStarField = (count: number, size: number, depth: number): THREE.Points => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Distribute stars in a sphere for 3D effect
        const radius = depth * (0.2 + Math.random() * 0.8);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
        
        // Create color variations for visual interest
        if (Math.random() > 0.85) {
          // Blue stars
          colors[i3] = 0.7 + Math.random() * 0.3;
          colors[i3 + 1] = 0.8 + Math.random() * 0.2;
          colors[i3 + 2] = 1.0;
        } else if (Math.random() > 0.7) {
          // Yellow/orange stars
          colors[i3] = 1.0;
          colors[i3 + 1] = 0.8 + Math.random() * 0.2;
          colors[i3 + 2] = 0.3 + Math.random() * 0.3;
        } else if (Math.random() > 0.55) {
          // Red stars
          colors[i3] = 1.0;
          colors[i3 + 1] = 0.3 + Math.random() * 0.2;
          colors[i3 + 2] = 0.2 + Math.random() * 0.2;
        } else {
          // White stars
          const brightness = 0.7 + Math.random() * 0.3;
          colors[i3] = brightness;
          colors[i3 + 1] = brightness;
          colors[i3 + 2] = brightness;
        }
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      // Create star material with glow effect
      const material = new THREE.PointsMaterial({
        size: size,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      
      return new THREE.Points(geometry, material);
    };
    
    // Create multiple star layers for 3D depth effect
    const starSystems = [
      createStarField(10000, 0.15, 250),  // Distant small stars
      createStarField(5000, 0.2, 180),    // Mid-distance stars
      createStarField(2000, 0.25, 100),   // Closer stars
      createStarField(500, 0.3, 70)       // Foreground stars
    ];
    
    starSystems.forEach(system => scene.add(system));
    
    // Create cosmic dust particles
    const cosmicDustGeometry = new THREE.BufferGeometry();
    const dustCount = 3000;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);
    const dustSizes = new Float32Array(dustCount);
    
    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3;
      
      // Distribute dust in a more compressed disk shape
      const radius = 20 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      // Make the dust distribution more flat (disk-like)
      const phi = (Math.random() - 0.5) * 0.5 + Math.PI/2;
      
      dustPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      dustPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      dustPositions[i3 + 2] = radius * Math.cos(phi);
      
      // Dust sizes
      dustSizes[i] = 0.05 + Math.random() * 0.1;
      
      // Dust colors (subtle blues and purples)
      const blueShade = 0.5 + Math.random() * 0.5;
      dustColors[i3] = 0.2 * blueShade;
      dustColors[i3 + 1] = 0.3 * blueShade;
      dustColors[i3 + 2] = 0.7 * blueShade;
    }
    
    cosmicDustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    cosmicDustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));
    
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const cosmicDust = new THREE.Points(cosmicDustGeometry, dustMaterial);
    scene.add(cosmicDust);
    
    // Animation state for smooth movement
    const animationState = createAnimationState();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    // Setup event listeners
    const cleanup = setupEventListeners(animationState, handleResize);
    
    // Animation loop with slow autonomous movement
    const animate = () => {
      // Update animation
      updateAnimation(animationState, camera, starSystems, [], [], []);
      
      // Add slow autonomous rotation for cosmic dust
      cosmicDust.rotation.y += 0.0001;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cleanup();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Points) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeBackground;
