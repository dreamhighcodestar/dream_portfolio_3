
import * as THREE from 'three';
import { createRandomParticles, ParticleData } from './ParticleSystem';
import { createCircleTexture, createTriangleTexture, createStarTexture, createDiamondTexture } from './ParticleTextures';

export const createShapedParticles = (): THREE.Points[] | null => {
  const { geometry, sizes, shapes, opacity }: ParticleData = createRandomParticles();
  
  // Create the particle textures
  const circleTexture = createCircleTexture();
  const triangleTexture = createTriangleTexture();
  const starTexture = createStarTexture();
  const diamondTexture = createDiamondTexture();
  
  if (!circleTexture || !triangleTexture || !starTexture || !diamondTexture) return null;
  
  const textures = [circleTexture, triangleTexture, starTexture, diamondTexture];
  
  // Create separate particle systems for each shape type
  const particleSystems: THREE.Points[] = [];
  
  for (let shapeType = 0; shapeType < 4; shapeType++) {
    const shapeIndices = Array.from({ length: shapes.length })
      .map((_, i) => i)
      .filter(i => shapes[i] === shapeType);
      
    if (shapeIndices.length === 0) continue;
    
    const shapeGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(shapeIndices.length * 3);
    const colors = new Float32Array(shapeIndices.length * 3);
    
    shapeIndices.forEach((originalIndex, newIndex) => {
      // Copy position
      const origPosIndex = originalIndex * 3;
      const newPosIndex = newIndex * 3;
      positions[newPosIndex] = geometry.attributes.position.array[origPosIndex];
      positions[newPosIndex + 1] = geometry.attributes.position.array[origPosIndex + 1];
      positions[newPosIndex + 2] = geometry.attributes.position.array[origPosIndex + 2];
      
      // Copy color
      const origColorIndex = originalIndex * 3;
      const newColorIndex = newIndex * 3;
      colors[newColorIndex] = geometry.attributes.color.array[origColorIndex];
      colors[newColorIndex + 1] = geometry.attributes.color.array[origColorIndex + 1];
      colors[newColorIndex + 2] = geometry.attributes.color.array[origColorIndex + 2];
    });
    
    shapeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    shapeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.2,
      map: textures[shapeType],
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
      depthWrite: false,
    });
    
    const particles = new THREE.Points(shapeGeometry, material);
    particleSystems.push(particles);
  }
  
  return particleSystems;
};
