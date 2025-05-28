
import * as THREE from 'three';

export const createGalaxy = (x: number, y: number, z: number, size: number, color: THREE.Color): THREE.Points => {
  const galaxyGeometry = new THREE.BufferGeometry();
  const galaxyParticles = 2000; // More particles for denser galaxies
  const galaxyPositions = new Float32Array(galaxyParticles * 3);
  
  for (let i = 0; i < galaxyParticles; i++) {
    const i3 = i * 3;
    const radius = Math.random() * size;
    const spinAngle = radius * 0.8; // More spiral
    const branchAngle = (i % 4) * Math.PI * 2 / 4; // 4 spiral arms
    
    const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;
    const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;
    const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;

    galaxyPositions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    galaxyPositions[i3 + 1] = randomY * 0.5;
    galaxyPositions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
  }
  
  galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
  
  const galaxyMaterial = new THREE.PointsMaterial({
    size: 0.15,
    sizeAttenuation: true,
    color: color,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });
  
  const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
  galaxy.position.set(x, y, z);
  return galaxy;
};
