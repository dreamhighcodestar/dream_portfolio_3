
import * as THREE from 'three';

export const createCircleTexture = (): THREE.CanvasTexture | null => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  
  ctx.beginPath();
  ctx.arc(16, 16, 14, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const createTriangleTexture = (): THREE.CanvasTexture | null => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  
  ctx.beginPath();
  ctx.moveTo(16, 2);
  ctx.lineTo(30, 28);
  ctx.lineTo(2, 28);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const createStarTexture = (): THREE.CanvasTexture | null => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  
  ctx.beginPath();
  const spikes = 5;
  const outerRadius = 14;
  const innerRadius = 6;
  
  let rot = Math.PI / 2 * 3;
  let x = 16;
  let y = 16;
  let step = Math.PI / spikes;
  
  ctx.moveTo(x, y - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = 16 + Math.cos(rot) * outerRadius;
    y = 16 + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;
    
    x = 16 + Math.cos(rot) * innerRadius;
    y = 16 + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(16, 16 - outerRadius);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const createDiamondTexture = (): THREE.CanvasTexture | null => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  
  ctx.beginPath();
  ctx.moveTo(16, 2);  // Top
  ctx.lineTo(30, 16); // Right
  ctx.lineTo(16, 30); // Bottom
  ctx.lineTo(2, 16);  // Left
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};
