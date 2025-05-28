
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpaceBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera with wider field of view for more immersive effect
    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 20;
    
    // Create renderer with better quality settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000510, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Create multiple star layers with different sizes and depths
    const createStarField = (count: number, size: number, maxDepth: number, colorIntensity: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Distribute stars in sphere for more realistic space feel
        const radius = Math.random() * maxDepth;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
        
        // Random size variation
        sizes[i] = size * (0.5 + Math.random());
        
        // Create color variations
        const color = new THREE.Color();
        if (Math.random() > 0.8) {
          // Blue stars
          color.setRGB(0.7 + Math.random() * 0.3 * colorIntensity, 
                     0.8 + Math.random() * 0.2 * colorIntensity, 
                     1.0 * colorIntensity);
        } else if (Math.random() > 0.6) {
          // Yellow/orange stars
          color.setRGB(1.0 * colorIntensity, 
                     0.8 + Math.random() * 0.2 * colorIntensity, 
                     0.3 + Math.random() * 0.3 * colorIntensity);
        } else if (Math.random() > 0.4) {
          // Red stars
          color.setRGB(1.0 * colorIntensity, 
                     0.3 + Math.random() * 0.2 * colorIntensity, 
                     0.2 + Math.random() * 0.2 * colorIntensity);
        } else {
          // White stars
          const brightness = 0.7 + Math.random() * 0.3 * colorIntensity;
          color.setRGB(brightness, brightness, brightness);
        }
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      
      // Create point material with custom vertex colors and sizes
      const material = new THREE.PointsMaterial({
        size: size,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      
      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
      return stars;
    };
    
    // Create multiple star layers for parallax effect
    const starLayers = [
      createStarField(12000, 0.1, 200, 1.0),  // Distant small stars
      createStarField(6000, 0.15, 150, 1.2),  // Mid-distance stars
      createStarField(3000, 0.2, 100, 1.4),   // Closer stars
      createStarField(1000, 0.3, 50, 1.6)     // Very close bright stars
    ];

    // Create bright points for larger stars with subtle glow
    const createBrightStar = (x: number, y: number, z: number, size: number, color: THREE.Color) => {
      // Core star point
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(3);
      positions[0] = x;
      positions[1] = y;
      positions[2] = z;
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.PointsMaterial({
        size: size,
        color: color,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending
      });
      
      return new THREE.Points(geometry, material);
    };
    
    // Add a few dozen bright stars scattered throughout
    const brightStars = [];
    for (let i = 0; i < 50; i++) {
      const radius = 20 + Math.random() * 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      const size = 0.5 + Math.random() * 0.5;
      
      // Create color with slight variations
      let color;
      if (Math.random() > 0.7) {
        // Blue-ish
        color = new THREE.Color(0.8, 0.9, 1.0);
      } else if (Math.random() > 0.4) {
        // Yellow-ish
        color = new THREE.Color(1.0, 0.9, 0.7);
      } else {
        // White
        color = new THREE.Color(1.0, 1.0, 1.0);
      }
      
      const star = createBrightStar(x, y, z, size, color);
      scene.add(star);
      brightStars.push(star);
    }
    
    // Subtle autonomous movement variables
    let time = 0;
    
    // Animation loop with subtle movements
    const animate = () => {
      time += 0.0005;
      
      // Subtle autonomous rotation of star layers
      starLayers.forEach((layer, i) => {
        const speedFactor = 0.1 - (i * 0.02);
        layer.rotation.x = time * speedFactor;
        layer.rotation.y = time * speedFactor * 1.5;
      });
      
      // Subtle pulsing for bright stars
      brightStars.forEach((star, i) => {
        const pulseFactor = 0.9 + Math.sin(time * 10 + i) * 0.1;
        star.material.size = star.material.size * 0.99 + star.material.size * 0.01 * pulseFactor;
      });
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
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

export default SpaceBackground;
