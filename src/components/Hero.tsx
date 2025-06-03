
import React from 'react';
import AnimatedImage from './AnimatedImage';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import FeaturedProjects from './projects/FeaturedProjects';
import { projects } from '@/data/projectsData';



const Hero: React.FC = () => {
  return (
    <FeaturedProjects projects={projects} />
  );
};

export default Hero;
