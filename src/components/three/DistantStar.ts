
import * as THREE from 'three';

export const createDistantStar = (x: number, y: number, z: number, size: number, color: number): THREE.Mesh => {
  const starGeometry = new THREE.SphereGeometry(size, 16, 16);
  const starMaterial = new THREE.MeshBasicMaterial({ color: color });
  const star = new THREE.Mesh(starGeometry, starMaterial);
  star.position.set(x, y, z);
  
  // Add larger glow effect
  const glowGeometry = new THREE.SphereGeometry(size * 2.5, 16, 16);
  const glowMaterial = new THREE.MeshBasicMaterial({ 
    color: color, 
    transparent: true, 
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });
  const glow = new THREE.Mesh(glowGeometry, glowMaterial);
  star.add(glow);
  
  return star;
};

export const createBrightStars = (): THREE.Mesh[] => {
  return [
    createDistantStar(-50, 30, -200, 0.8, 0xffaa66),  // Orange
    createDistantStar(70, -40, -150, 1.0, 0x88aaff),  // Blue
    createDistantStar(-30, -60, -180, 0.6, 0xffffff),  // White
    createDistantStar(40, 60, -220, 0.9, 0xff88ee),   // Pink
    createDistantStar(-70, -20, -160, 0.7, 0x88ffaa),  // Teal
  ];
};
