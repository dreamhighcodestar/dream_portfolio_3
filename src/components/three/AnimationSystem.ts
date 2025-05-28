
import * as THREE from 'three';

export interface AnimationState {
  time: number;
  mouseX: number;
  mouseY: number;
  targetMouseX: number;
  targetMouseY: number;
  scrollY: number;
}

export const createAnimationState = (): AnimationState => ({
  time: 0,
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  scrollY: 0
});

export const setupEventListeners = (
  animationState: AnimationState,
  handleResize: () => void
): (() => void) => {
  // We're still tracking mouse movement but not using it for star movement
  const handleMouseMove = (event: MouseEvent): void => {
    animationState.targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
    animationState.targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const handleScroll = (): void => {
    animationState.scrollY = window.scrollY;
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // Return cleanup function
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
};

export const updateAnimation = (
  animationState: AnimationState,
  camera: THREE.PerspectiveCamera,
  starSystems: THREE.Points[] | null,
  galaxies: THREE.Points[],
  nebulae: THREE.Mesh[],
  brightStars: THREE.Mesh[]
): void => {
  // Increment time for autonomous movement
  animationState.time += 0.001; // Slower time increment for gentler movement
  
  // Very subtle autonomous camera movement for 3D effect
  const autonomousX = Math.sin(animationState.time * 0.2) * 0.1;
  const autonomousY = Math.cos(animationState.time * 0.15) * 0.05;
  
  // Apply only autonomous movement to camera - independent of mouse
  camera.position.x += (autonomousX - camera.position.x) * 0.01;
  camera.position.y += (autonomousY - camera.position.y) * 0.01;
  
  // Very subtle camera rotation for enhanced 3D feel
  camera.rotation.x = Math.sin(animationState.time * 0.1) * 0.015;
  camera.rotation.y = Math.sin(animationState.time * 0.13) * 0.01;

  // Rotate star systems slowly and independently
  if (starSystems) {
    starSystems.forEach((system, i) => {
      // Each layer rotates at a different pace
      system.rotation.x += 0.00005 * (i + 1);
      system.rotation.y += 0.00007 * (i + 1);
      
      // Add some gentle waviness to the star field
      const waveX = Math.sin(animationState.time * (0.05 + i * 0.01)) * 0.05;
      const waveY = Math.cos(animationState.time * (0.04 + i * 0.01)) * 0.03;
      
      system.position.x = waveX;
      system.position.y = waveY;
    });
  }
};
