
import * as THREE from 'three';

export interface ParticleData {
  geometry: THREE.BufferGeometry;
  sizes: Float32Array;
  shapes: Float32Array;
  opacity: Float32Array;
}

export const createRandomParticles = (): ParticleData => {
  const starsGeometry = new THREE.BufferGeometry();
  const starsCount = 7000;
  const posArray = new Float32Array(starsCount * 3);
  const colorsArray = new Float32Array(starsCount * 3);
  const sizeArray = new Float32Array(starsCount);
  const opacityArray = new Float32Array(starsCount);
  const shapeArray = new Float32Array(starsCount); // For different shapes

  for (let i = 0; i < starsCount * 3; i += 3) {
    // Position (improved sphere distribution)
    const radius = 50 + Math.random() * 200;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
    posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    posArray[i + 2] = radius * Math.cos(phi);
    
    // Star size variance - more dramatic size differences
    sizeArray[i/3] = Math.random() < 0.15 ? 0.3 + Math.random() * 0.4 : 0.05 + Math.random() * 0.15;
    
    // Random opacity for twinkling effect
    opacityArray[i/3] = 0.7 + Math.random() * 0.3;
    
    // Shape type (0-3 for different shapes)
    shapeArray[i/3] = Math.floor(Math.random() * 4);
    
    // Enhanced star colors - more vibrant
    const colorChoice = Math.random();
    if (colorChoice > 0.85) {
      // Blue tint stars
      colorsArray[i] = 0.5 + Math.random() * 0.3;
      colorsArray[i + 1] = 0.7 + Math.random() * 0.3;
      colorsArray[i + 2] = 1.0;
    } else if (colorChoice > 0.7) {
      // Yellow tint stars
      colorsArray[i] = 1.0;
      colorsArray[i + 1] = 0.8 + Math.random() * 0.2;
      colorsArray[i + 2] = 0.4 + Math.random() * 0.3;
    } else if (colorChoice > 0.55) {
      // Red tint stars
      colorsArray[i] = 1.0;
      colorsArray[i + 1] = 0.2 + Math.random() * 0.3;
      colorsArray[i + 2] = 0.2 + Math.random() * 0.3;
    } else if (colorChoice > 0.4) {
      // Purple tint stars
      colorsArray[i] = 0.7 + Math.random() * 0.3;
      colorsArray[i + 1] = 0.2 + Math.random() * 0.2;
      colorsArray[i + 2] = 0.8 + Math.random() * 0.2;
    } else {
      // White/blue stars
      const bright = 0.8 + Math.random() * 0.2;
      colorsArray[i] = bright;
      colorsArray[i + 1] = bright;
      colorsArray[i + 2] = bright + Math.random() * 0.2;
    }
  }

  starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  starsGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
  
  return { geometry: starsGeometry, sizes: sizeArray, shapes: shapeArray, opacity: opacityArray };
};
