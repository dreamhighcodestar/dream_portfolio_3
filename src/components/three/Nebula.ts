
import * as THREE from 'three';

export const createNebula = (index: number): THREE.Mesh => {
  const size = 20 + Math.random() * 40; // Larger nebulae
  const geometry = new THREE.SphereGeometry(size, 32, 32);
  
  // Create nebula with more vibrant colors
  let nebulaColor;
  const colorType = Math.random();
  
  if (colorType > 0.7) {
    // Purple/blue nebula
    nebulaColor = new THREE.Color(
      0.4 + Math.random() * 0.2, 
      0.1 + Math.random() * 0.2, 
      0.6 + Math.random() * 0.4
    );
  } else if (colorType > 0.4) {
    // Teal/blue nebula
    nebulaColor = new THREE.Color(
      0.1 + Math.random() * 0.2, 
      0.4 + Math.random() * 0.3, 
      0.6 + Math.random() * 0.4
    );
  } else if (colorType > 0.2) {
    // Red/orange nebula
    nebulaColor = new THREE.Color(
      0.6 + Math.random() * 0.4, 
      0.2 + Math.random() * 0.2, 
      0.1 + Math.random() * 0.2
    );
  } else {
    // Green/teal nebula (new color)
    nebulaColor = new THREE.Color(
      0.1 + Math.random() * 0.2, 
      0.6 + Math.random() * 0.4, 
      0.3 + Math.random() * 0.3
    );
  }
  
  const material = new THREE.MeshBasicMaterial({
    color: nebulaColor,
    transparent: true,
    opacity: 0.05 + Math.random() * 0.08, // More visible nebulae
    side: THREE.DoubleSide,
  });
  
  const nebula = new THREE.Mesh(geometry, material);
  
  // Position nebulae in a more distributed manner
  nebula.position.set(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    -60 - Math.random() * 180
  );
  
  // Random rotation for more natural look
  nebula.rotation.x = Math.random() * Math.PI;
  nebula.rotation.y = Math.random() * Math.PI;
  nebula.rotation.z = Math.random() * Math.PI;
  
  return nebula;
};

export const createNebulae = (count: number): THREE.Mesh[] => {
  const nebulae: THREE.Mesh[] = [];
  for (let i = 0; i < count; i++) {
    nebulae.push(createNebula(i));
  }
  return nebulae;
};
